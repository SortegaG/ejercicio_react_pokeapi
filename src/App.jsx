import React, { useState } from "react";
import Search from "./components/Search";
import PokeList from "./components/PokeList";
import axios from "axios";
import "./App.css";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]); 

  const handleSearch = async (pokemonName) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = res.data;

      const newPokemon = {
        name: data.name,
        sprite: data.sprites.front_default,
      };

      setPokemonList((prevList) => [...prevList, newPokemon]); 
    } catch (err) {
      console.error("No se encontró el Pokémon:", err);
    }
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <PokeList pokemonList={pokemonList} />
    </>
  );
};

export default App;