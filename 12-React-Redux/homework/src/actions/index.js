import {GET_MOVIES, GEST_DETAILS, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE} from "../actions/constants";

let apiKey = "7922b1f8";

// function actionMovies(movies){
//     return { type: "GET_MOVIES", payload: movies }
// }

export function addMovieToFavorite(movie) {
    return {
        type: ADD_MOVIE_FAVORITE, movie
    }
}

export function removeFromFavorite(id) {
    return {
        type: REMOVE_MOVIE_FAVORITE, id
    }
}

export function getMovieDatails(id) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(response => response.json())
        .then(json => {dispatch({ type:GEST_DETAILS, movie: json})});
    }
}

export function getMovies(title) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
        .then(response => response.json())
        .then(json => {dispatch({ type: GET_MOVIES, movies: json });     
        //.then(json => {dispatch(actionMovies(json));
        });
    }
}