import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeFromFavorite } from "../../actions/index";

export class ConnectedList extends Component {

  render() {
    console.log(this.props);
    return ( 
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {
            this.props.movieFavorites && this.props.movieFavorites.map(movie => 
              <div key={movie.id}>
                 <Link to={`/movie/${movie.id}`}> {movie.title} </Link> 
                 <button onClick={() => this.props.removeFromFavorite(movie.id)}>Remove from favorites</button>
              </div>
            )
          }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    movieFavorites: state.movieFavorites
  }
};

 function mapDispatchToProps(dispatch) {
   return {
    removeFromFavorite: (id) => dispatch(removeFromFavorite(id))
   }
 }; 

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);