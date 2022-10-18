import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDatails } from "../../actions/index";

import './Movie.css';

class Movie extends React.Component {

    //this.props.match.params.id;
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getMovieDatails(id);
    }

    componentWillUnmount() {
        //this.props.movie = {}
        // para limpiar movie
    }

    render() {
        //const {year, title, poster, type} = this.props;
        return (
            this.props.movie ? <div className="movie-detail">
                Detalle de la pelicula  
                <h2>{`Title: ${this.props.movie.Title}`}</h2>
                <img src={this.props.movie.Poster}/>
                <h4> {`Year: ${this.props.movie.Year}`} </h4>
                <h4> {`Genre: ${this.props.movie.Genre}`} </h4>
                <h4> {`Actors: ${this.props.movie.Actors}`} </h4>
            </div> : <div><h2>loading ...</h2></div>
        );
    }
}

// function Movie(props){
//    let id = props.params.id
//     let {id} = useParams();
// }
function mapStateToProps(state){
    return {
      movie: state.movieDetails
    }
  };
  
  function mapDispatchToProps(dispatch) {
    return {
        getMovieDatails: (id) => dispatch(getMovieDatails(id))
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Movie);