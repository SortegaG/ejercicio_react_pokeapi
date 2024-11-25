import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import '../../../styles/components/_Details.scss'

const Details = () => {
  const { id } = useParams();
  
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemonData(response.data);  
        console.log(response.data)
      } catch (e) {
        console.log(e);

      }
    }

    getPokemons();
  }, [id]); 

  
  if (!pokemonData) {
    return <p>No se encontraron datos del Pokémon.</p>;
  }

  return (
    <article className="pokemon-card">
      <h1>{pokemonData.name}</h1>
      <img 
        src={pokemonData.sprites?.front_default} 
        alt={`Sprite of ${pokemonData.name}`} 
        className="pokemon-image" 
      />
      <p><strong>ID:</strong> #{pokemonData.id}</p>
      <p><strong>Altura:</strong> {pokemonData.height*10} centímetros</p>
      <p><strong>Peso:</strong> {pokemonData.weight/10} kilogramos</p>
    </article>
  );
};

export default Details;
