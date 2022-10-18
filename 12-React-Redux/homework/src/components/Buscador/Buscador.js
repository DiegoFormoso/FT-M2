import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieToFavorite } from "../../actions/index";
import store from "../../store/index";


// COMPONENTE DE CLASES
export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    // hacer la busqueda a la api de la pelicula
    this.props.getMovies(this.state.title);
    this.setState({title: ""});
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
         {
          this.props.movies && this.props.movies.map(movie => movie &&
            <li key={movie.imdbID}>
               <Link to={`/movie/${movie.imdbID}`}> {movie.Title} </Link> 
               <button onClick={() => this.props.addMovieToFavorite({title: movie.Title, id: movie.imdbID})}> ADD TO FAV</button>
            </li>
          )
         }
        </ul>
      </div>
    );
  }
}

// COMPONENTE DE FUNCION
// function Buscador {
//   let [title, setTitle] = React.useState("");

//   function handleChange(event) {
//     this.setState({ title: event.target.value });
//   }

//   let  handleSubmit = (event) => {
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <h2>Buscador</h2>
//       <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
//         <div>
//           <label className="label" htmlFor="title">Película: </label>
//           <input
//             type="text"
//             id="title"
//             autoComplete="off"
//             value={title}
//             onChange={(e) => .handleChange(e)}
//           />
//         </div>
//         <button type="submit">BUSCAR</button>
//       </form>
//       <ul>
//         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
//       </ul>
//     </div>
//   )
    
// }
function mapStateToProps(state){
  return {
    movies: state.moviesLoaded
  }
};

function mapDispatchToProps(dispatch) {
  return {
    getMovies: (title) => dispatch(getMovies(title)),
    addMovieToFavorite: (movie) => dispatch(addMovieToFavorite(movie))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

//export default Buscador;
