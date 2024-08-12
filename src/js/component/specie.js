import React, {useState, useEffect} from "react";
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Species from "./species";



export const Specie = () => {
   const params=useParams();
   const [specie, setSpecie] = useState([]);
    console.log(specie,);
    console.log(params, "params");

   async function getSpecie (){
        const req=await   fetch(`https://swapi.tech/api/species/${params.specieid}`)
        .then(response => response.json())
        .then(data => setSpecie(data.result.properties))
    }
    useEffect(() => {
        getSpecie();
    }, [])
    return (
      <div className="specie bg-white">
          {specie ? ( 
               <div>
                <div className="d-flex">
                <img variant="top" src={`https://starwars-visualguide.com/assets/img/species/${params.specieid}.jpg`} height={"auto"} width={"300px !important"}  />
                <div>
                 <h3>{specie.name}</h3>
                 <p>
                   With supporting text below as a natural lead-in to additional content.
                 </p>
                 <Button variant="primary">Go somewhere</Button>
               </div>
               </div>
               <div className="row">
                <div className="col"> 
                  <h4>Classification</h4>
                  <p>{specie.classification}</p>
                </div>
                <div className="col"> 
                  <h4>Designation</h4>
                  <p>{specie.designation}</p>
                </div>
                <div className="col"> 
                  <h4>Average Height</h4>
                  <p>{specie.average_height}</p>
                </div>
                <div className="col"> 
                  <h4>Average lifespan</h4>
                  <p>{specie.average_lifespan}</p>
                </div>
  
               </div>
             </div>
          ):(
              <div>Loading...</div>
          )}
      </div>
    );
}

