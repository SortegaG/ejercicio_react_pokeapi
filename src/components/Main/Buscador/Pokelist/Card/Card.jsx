import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ pokemon }) => {
  const navigate = useNavigate();

  if (!pokemon) {
    return <p>No se proporcionaron datos del Pokémon</p>;
  }

  const { id, name, sprites } = pokemon;

  const handleDetailsClick = () => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <div className="card">
      <p>#{id}</p>
      <h3>{name}</h3>
      <img src={sprites?.front_default} alt={`Sprite of ${name}`} />
      <button className="btn" onClick={handleDetailsClick}>
        Detalles
      </button>
    </div>
  );
};

export default Card;
