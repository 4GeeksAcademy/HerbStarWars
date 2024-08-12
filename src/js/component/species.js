import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Species = () => { 
    const [species, setSpecies] = useState([]);
    useEffect(() => {
        fetch("https://swapi.tech/api/species/")
        .then(response => response.json())
        .then(data => setSpecies(data.results))
    }, [])
    console.log(species, "species");
    return (
        <div className="species">
            {species.length > 0 ? ( 
                species.map((specie, index) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/species/${specie.uid}.jpg`}/>
                        <Card.Body>
                          <Card.Title>{specie.name}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          
                          <div className="buttons"><Link to={`/specie/${specie.uid}`}>Learn More</Link>
                            <button onClick={() => actions.addFavorite(specie.name)}>♡</button> 
                          </div>
                        </Card.Body>
                        
                      
                        
                      </Card>
                    )
                })
             ) : (
                 <div>Loading...</div>
             )}
        </div>

    )
}
export default Species;