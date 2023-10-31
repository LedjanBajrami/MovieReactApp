import { useParams } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import { moviesData } from "../../data/data";
import './MoviesDetailsPage.css';


function MovieDetailsPage() {
    const { movieId } = useParams();
    const movie = moviesData.find((m) => m.id === parseInt(movieId));
    
    if (!movie) {
      return <div>Movie not found</div>;
    }
    
    return (
      <div className=" px-5 backimg">
        <div>
        <h2>{movie.title}</h2>
        <p>Release date: {movie.releaseDate}</p>
        <p>{movie.description}</p>
        <img src={movie.moviePoster} alt={movie.title} style={{height:"30rem"}} />
      </div>
      </div>
      
    );
  }
  
  export default MovieDetailsPage;
  