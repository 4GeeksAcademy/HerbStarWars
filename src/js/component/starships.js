import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Starships = () => {
    const { actions } = React.useContext(Context);
    const [starships, setStarships] = useState([]);
    useEffect(() => {
        fetch("https://swapi.tech/api/starships/")
            .then(response => response.json())
            .then(data => setStarships(data.results))
    }, []);
    console.log(starships, "starships");

    return (
        <div className="starships">
            {starships.length > 0 ? (
                starships.map((starship, index) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/starships/${starship.uid}.jpg`}/>
                            <Card.Body>
                                <Card.Title>{starship.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                                <div className="buttons"><Link to={`/starship/${starship.uid}`}>Learn More</Link>
                                    <button onClick={() => actions.addFavorite(starship.name)}>♡</button>
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
export default Starships;