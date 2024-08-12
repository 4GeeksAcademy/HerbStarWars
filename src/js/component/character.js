import React, {useState, useEffect} from "react";
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";



export const Character = () => {
   const params=useParams();
   const [character, setCharacter] = useState([]);
    console.log(params, "params");

   async function getCharacter (){
        const req=await   fetch(`https://swapi.tech/api/people/${params.characterid}`)
        .then(response => response.json())
        .then(data => setCharacter(data.result.properties))
    }
    useEffect(() => {
        getCharacter();
    }, [])
  return (
    <div className="character bg-white">
        {character ? ( 
             <div>
              <div className="d-flex">
              <img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${params.characterid}.jpg`} height={"auto"} width={"300px !important"}  />
              <div>
               <h3>{character.name}</h3>
               <p>
                 With supporting text below as a natural lead-in to additional content.
               </p>
               <Button variant="primary">Go somewhere</Button>
             </div>
             </div>
             <div className="row">
              <div className="col"> 
                <h4>Gender</h4>
                <p>{character.gender}</p>
              </div>
              <div className="col"> 
                <h4>Hair-Color</h4>
                <p>{character.hair_color}</p>
              </div>
              <div className="col"> 
                <h4>Eye-Color</h4>
                <p>{character.eye_color}</p>
              </div>
              <div className="col"> 
                <h4>Birth-Year</h4>
                <p>{character.birth_year}</p>
              </div>

             </div>
           </div>
        ):(
            <div>Loading...</div>
        )}
    </div>
  );
}

