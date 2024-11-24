import React from "react";
import Card from "./Card";
import '../../styles/PokeList.scss'
import { v4 as uuidv4 } from 'uuid';


const PokeList = ({ pokemonList }) => {
  return (
    <section className="pokelist">
      <h1>Lista de Pokémon</h1>
      <div className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <Card key={uuidv4} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
};

export default PokeList;
