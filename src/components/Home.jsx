import React from 'react';
import { pizzas } from '../pizzas'; 
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <div>
      <h1>Nuestras Pizzas</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} /> 
          // Renderiza CardPizza por cada pizza
        ))}
      </div>
    </div>
  );
};

export default Home;