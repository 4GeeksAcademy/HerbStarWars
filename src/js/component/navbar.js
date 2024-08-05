import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../store/appContext';

function Navbar() {
  const [show, setShow] = useState(false);
	  const { store, actions } = useContext(Context);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
 	<>
		<div className='navbar'> <h1> StarWars Blog </h1>
			<Button variant="primary" onClick={handleShow}>
			Favorites {store.favorites.length}
			</Button>
		</div>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
		<ol className='favorites'>
			 {store.favorites.map((name)=> <li>{name}</li>)}
		</ol>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navbar;