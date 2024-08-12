import React, {useState, useEffect} from "react";
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const Starship = () => {
    const params=useParams();
    const [starship, setStarship] = useState([]);
     console.log(starship, "starship");
     console.log(params, "params");

    async function getStarship (){
          const req=await   fetch(`https://swapi.tech/api/starships/${params.starshipid}`)
          .then(response => response.json())
          .then(data => setStarship(data.result.properties))
     }
     useEffect(() => {
          getStarship();
     }, [])
     return (
      <div className="starship bg-white">
          {starship ? ( 
               <div>
                <div className="d-flex">
                <img variant="top" src={`https://starwars-visualguide.com/assets/img/starships/${params.starshipid}.jpg`} height={"auto"} width={"300px !important"}  />
                <div>
                 <h3>{starship.name}</h3>
                 <p>
                   With supporting text below as a natural lead-in to additional content.
                 </p>
                 <Button variant="primary">Go somewhere</Button>
               </div>
               </div>
               <div className="row">
                <div className="col"> 
                  <h4>Model</h4>
                  <p>{starship.model}</p>
                </div>
                <div className="col"> 
                  <h4>Crew</h4>
                  <p>{starship.crew}</p>
                </div>
                <div className="col"> 
                  <h4>Passengers</h4>
                  <p>{starship.passengers}</p>
                </div>
                <div className="col"> 
                  <h4>Manufacturer</h4>
                  <p>{starship.manufacturer}</p>
                </div>
  
               </div>
             </div>
          ):(
              <div>Loading...</div>
          )}
      </div>
    );
}


