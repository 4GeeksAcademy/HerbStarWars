import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import  Characters  from "../component/characters.js";
import Starships from "../component/starships.js";
import Species from "../component/species.js";






const Home = () => (
	<div className="home">
		<Characters/>
		<Starships/>
		<Species/>
	</div>
);
export default Home;
