import React, {useState, useEffect} from "react";
import { GlobalCard } from "./card";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Characters = () => { 
    const { store, actions } = React.useContext(Context);
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch("https://swapi.tech/api/people")
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, [])
    console.log(characters, "characters");
    return (
        <div className="characters">
            {characters.length > 0 ? ( 
                characters.map((character, index) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${character.uid}.jpg`}/>
                        <Card.Body>
                          <Card.Title>{character.name}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          
                          <div className="buttons"><Link to={`/people/${character.uid}`}>Learn More</Link>
                            <button onClick={() => actions.addFavorite(character.name)}>♡</button> 
                          </div>
                        </Card.Body>
                        
                      
                        -
                      </Card>
                    )
                })
             ) : (
                 <div>Loading...</div>
             )}
        </div>

    )
}
export default Characters;