import React from 'react';
import {bar, text, btn} from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div className={bar}>
      <input type="text" placeholder='Ciudad ..' className={text}/>
      <button className={btn} onClick={() => {onSearch('Valor del input')}}>Buscar</button>      
    </div>
  )
};