import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import { GlobalCard } from "./card";

const Starships = () => { 
    const [starships, setStarships] = useState([]);
    useEffect(() => {
        fetch("https://swapi.dev/api/starships/")
        .then(response => response.json())
        .then(data => setStarships(data.results))
    }, [])
    return (
        <div className="starships">
            {starships.length > 0 ? ( 
                starships.map((starships, index) => {
                    return (
                        <GlobalCard key={index} name={starships.name} />
                    )
                })
             ) : (
                 <div>Loading...</div>
             )}
        </div>

    )
}
export default Starships;