import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

export default function App() {
  // inicializo
  const [cities, setCities] = useState([]);  // es lo mismo que en componente de clase en el constructor

  function onSearch(city) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione
    let apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    //fetch(url, function(r, function(resource, callback))) respuesta de una funcion de una funcion
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const city = {
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
          // oldCities = cual es mi estado actual oldCities = cities en este momento
        if (cities.find(el => el.id === city.id) === undefined) //no es suficiente
            setCities(oldCities => [...oldCities, city]);
          //setCities([...cities, city]); // cities.concat(city)

          //  clasess
          // this.setState({cities: [...this.state.citiies, city]});
          // this.setState((state, props) => {cities: [...state.cities, city]});
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }


  // useEffect(() => {
  //   renderBoton();
  // }, [city]);


  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  
  return (
    <div className="App">
        <Nav 
          onSearch={onSearch}
        />
        <Cards 
          cities={cities}
          onClose={onClose} 
        />
    </div>
  );
}

//----------------------
// COMPONENTE DE CLASES
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cities: []
//     }
//   }

//   onSearch = (city) => {
//     let apiKey = '4ae2636d8dfbdc3044bede63951a019b';
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//     .then(r => r.json())
//     .then((recurso) => {
//       if(recurso.main !== undefined){
//         const city = {
//           min: Math.round(recurso.main.temp_min),
//           max: Math.round(recurso.main.temp_max),
//           img: recurso.weather[0].icon,
//           id: recurso.id,
//           wind: recurso.wind.speed,
//           temp: recurso.main.temp,
//           name: recurso.name,
//           weather: recurso.weather[0].main,
//           clouds: recurso.clouds.all,
//           latitud: recurso.coord.lat,
//           longitud: recurso.coord.lon
//         };
//         //this.setState({cities: [...this.state.citiies, city]});
//         this.setState((state, props) => {cities: [...state.cities, city]});
//       }

//   render() {
//     return (
//       <div className='App'>
//          <Nav/>
//          <Cards cities={cities}/>
//       </div>
//     )
//   }
// }
