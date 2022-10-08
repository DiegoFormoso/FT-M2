import React, { useState } from "react";
import {formu,txt,btn} from './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  function onChange(e){
    setCity(e.target.value);
  }

  return (
    <div className={formu}>
      <form onSubmit={(e) => {
        e.preventDefault(); // esto para que no recargue la pagina, cancele el comportamiento normal
        onSearch(city);
        setCity("");
      }}>
        <input 
          className={txt}
          type="text"
          placeholder="Ciudad..."
          // e es el evento onChange
          value = {city}
          onChange={(e) => onChange(e)}
        />
        <input className={btn} type="submit" value="Agregar" />
      </form>
    </div>
  );
}
