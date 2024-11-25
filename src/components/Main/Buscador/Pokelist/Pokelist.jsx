import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import '../../../../styles/components/_Pokelist.scss'

const ListaPokemon = ({ pokemons }) => {
  return (
    <>
      <div className="pokelist">
        {pokemons.map((item, index) => (
          <div className="card" key={uuidv4()}>
            <Card pokemon={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ListaPokemon;