import React from 'react';
import {card, closeIcon, cardTitle, cardBody, btnContent} from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className={card}>
      <div className={btnContent}>
        <button onClick={onClose} className={closeIcon}>X</button>
      </div>
      <hr3 className={cardTitle}>{name}</hr3>
      <div className={cardBody}>
        <div>
          <h5>Min</h5>
          <p>{min}</p>
        </div>
        <div>
          <h5>Max</h5>
          <p>{max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}  alt="icon"/>
        </div>
    </div>
  )
};