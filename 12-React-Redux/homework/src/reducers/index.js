import {GET_MOVIES, GEST_DETAILS, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE} from "../actions/constants";

const initialState = {
    moviesLoaded: [],
    movieDetails: {},
    movieFavorites: []
}


export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case GET_MOVIES :
            return {
                ...state,
                moviesLoaded: action.movies.Search /// tengo que cargar todas las peliculas nuevamente
            };
           
        case GEST_DETAILS :
            return {
                ...state,
                movieDetails: action.movie
            };   
            
        case ADD_MOVIE_FAVORITE :
            return {
                ...state,
                movieFavorites: [...state.movieFavorites, action.movie]
            }    

        case REMOVE_MOVIE_FAVORITE :
            return {
                ...state,
                movieFavorites: state.movieFavorites.filter((movie) => movie.id !== action.id)
            }

        default :
          return state;
    }

}