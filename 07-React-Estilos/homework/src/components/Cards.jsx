import React from 'react';
import Card from './Card';
import {cards} from './Cards.module.css';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={cards}>
      {cities.map(city => {
        return (
          <Card 
            name={city.name}
            max={city.main.temp_max} 
            min={city.main.temp_min}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)} 
            key={city.id}
           />
          )
      })}
    </div>
  )
};