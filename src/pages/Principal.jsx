import CardPokemon from "../components/CardPokemon"
import axios from 'axios'
import {useState} from "react"

const Principal = () => {
  const [pokemonData, setPokemonData] = useState([])
  async  function consultarAPI() {
        const pokemones = []
        for(let i=1; i>=0 && i<= 150;i++){
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const response = await axios (url);
       pokemones.push(response.data)   
       }

        console.log(pokemones)             
          
   }
 consultarAPI();

  return (
   <div className="container">
        <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-magnifying-glass"></i></span>
        <input type="text" className="form-control" placeholder="Busca un pokemon" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>

    <CardPokemon/>
    </div>  
  )
}

export default Principal