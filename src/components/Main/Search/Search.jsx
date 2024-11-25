import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [inputText, setInputText] = useState("");  // Estado inicial del imput

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputText.toLowerCase()); // Enviamos el texto al padre y dejamos el input vacio
    setInputText(""); 
  };

  return (
    <section className="formulario">
      <h1>Búsqueda de Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="pokemon"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} // Actualizamos el estado con el valor recogido del input
          placeholder="Nombre"
        />
        <button type="submit">Buscar</button>
      </form>
    </section>
  );
};

export default Search;
