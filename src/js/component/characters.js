import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import { GlobalCard } from "./card";

const Characters = () => { 
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch("https://swapi.tech/api/people")
        .then(response => response.json())
        .then(data => setCharacters(data))
    }, [])
    console.log(characters.results, "characters");
    return (
        <div className="characters">
            {characters.length > 0 ? ( 
                characters.map((character, index) => {
                    return (
                        <GlobalCard key={index} name={character.results.name} type={"people"} id={character.results.uid} />
                    )
                })
             ) : (
                 <div>Loading...</div>
             )}
        </div>

    )
}
export default Characters;