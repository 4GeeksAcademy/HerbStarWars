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
        .then(data => console.log(data))
    }

  return (
    <div className="character">
        {character.length > 0 ? ( 
             <Card>
             <Card.Header>Featured</Card.Header>
             <Card.Body>
               <Card.Title>Special title treatment</Card.Title>
               <Card.Text>
                 With supporting text below as a natural lead-in to additional content.
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
             </Card.Body>
           </Card>
        ):(
            <div>Loading...</div>
        )}
    </div>
  );
}

