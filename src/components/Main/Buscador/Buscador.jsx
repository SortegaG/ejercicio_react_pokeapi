import React, { useState } from 'react';
import Search from './Search';
import Pokelist from './Pokelist';
import '../../../styles/components/_Buscador.scss'

const Buscador = () => {
  const [pokemons, setPokemons] = useState([]); // Estado para guardar la lista de Pokémon encontrados


  const handleSearch = (pokemonData) => {
    setPokemons((prevPokemon) => [...prevPokemon, pokemonData]); // Añade el nuevo Pokémon a la lista
    //setPokemons(pokemonData); // Añade el nuevo Pokémon a la lista

  };

  return (
    <div>
        <Search onSubmitForm={handleSearch} />
        {pokemons.length > 0 && <Pokelist pokemons={pokemons} />}
    </div>
  );
};


export default Buscador;