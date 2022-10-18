import React from "react";

export default function City({city}) {

    // esto es si se pasa como parametro el onFilter, y se filtra directo aca
    // entonces hay que reemplazar city por onFilter, y todos los lugares
    // que invoca a city como objeto, reeemplazar por cityFromComponent
    // let params = useParams();
    // let cityFromComponent = onFilter(params.cityID);


    if (!city) return ( <div>La ciudad no existe</div> );
    return (
        <div> 
            <div>
                <h1>{city.name}</h1>
            </div>
            <div>
                <div>Temperatura: {city.temp}</div>
                <div>Clima: {city.weather}</div>
                <div>Viento: {city.wind}</div>
                <div>Cantidad de nubes: {city.clouds}</div>
                <div>Latitud: {city.latitud}</div>
                <div>Longitud: {city.longitud}</div>
            </div>
        </div>
    )
}
