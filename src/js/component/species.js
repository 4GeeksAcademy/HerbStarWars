import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import { GlobalCard } from "./card";

const Species = () => { 
    const [species, setSpecies] = useState([]);
    useEffect(() => {
        fetch("https://swapi.dev/api/species/")
        .then(response => response.json())
        .then(data => setSpecies(data.results))
    }, [])
    return (
        <div className="species">
            {species.length > 0 ? ( 
                species.map((species, index) => {
                    return (
                        <GlobalCard key={index} name={species.name} />
                    )
                })
             ) : (
                 <div>Loading...</div>
             )}
        </div>

    )
}
export default Species;