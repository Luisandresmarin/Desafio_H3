import React from 'react';

const CardPizza = ({ pizza }) => {

  return (
    <div className="card-pizza">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li> // Renderiza un <li> por cada ingrediente
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
      <button>Agregar</button>
    </div>
  );
};

export default CardPizza;