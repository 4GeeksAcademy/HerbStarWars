import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const GlobalCard = ({name, type, id}) => {
    const { store, actions } = React.useContext(Context);
    function addFavorite (name)  {
      const store = getStore();
      const favorites = store.favorites;
      if (!favorites.includes(name)) {
        favorites.concat(name);
        setStore({ favorites: favorites });
      }
      console.log("tried to add favorite", name);
    }
    function removeFavorite (name)  {
      const store = getStore();
      const favorites = store.favorites;
      const newFavorites = favorites.filter((favorite) => favorite !== name);
      setStore({ favorites: newFavorites });
    }
    console.log(type, id, "card");
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
          <div className="buttons"><Link to={`/people/${id}`}>Learn More</Link>
            <button onClick={() => actions.addFavorite(name)}>♡</button> 
          </div>
        </Card.Body>
        
      
        
      </Card>
    );

}
  