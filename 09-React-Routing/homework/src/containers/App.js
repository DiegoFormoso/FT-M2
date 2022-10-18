import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import City from '../components/City.jsx';
import {Route } from "react-router-dom";

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          if (cities.find(el => el.id === ciudad.id) === undefined)
            setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      {/* <Nav onSearch={onSearch}/>
      <div>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
      <hr /> */}
      
      {/* <Route path={"/"} > NOMBRE DEL COMPONENTE </Route> */}
        <Route path="/" render={()=><Nav onSearch={onSearch}/>}/>
        <Route exact path="/" render={()=><Cards cities={cities} onClose={onClose}/>}/>

        {/* Si se quiere que se vea en la misma pagina */}
        {/* <Route path="/" render={()=><Cards cities={cities} onClose={onClose}/>}/> */}
        <Route path="/about" component={About}/>
        <Route path="/city/:cityID" render={({match})=><City city={onFilter(match.params.cityID)}/>}/>
        {/* <Route path="/city/:cityID" render={()=><City onFilter={onFilter}/>}/> */}
        
    </div>
  );
}

export default App;
