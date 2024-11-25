import React from "react";

const Card = ({ pokemon }) => {
  const { name, sprite } = pokemon;

  return (
    <div className="pokemon-card">
      <h2 className="pokemon-name">{name}</h2>
      <img src={sprite} alt={name} className="pokemon-image" />
    </div>
  );
};

export default Card;
