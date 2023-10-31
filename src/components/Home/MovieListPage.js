import React from 'react';
import { moviesData } from '../../data/data';
import { Link, Route, Routes } from "react-router-dom";
import MovieDetailsPage from './MovieDetailsPage';
import './MoviesListPage.css';
import backgroundImg from '../../Assets/backi.jpg';


function MovieListPage() {
    return (
    <div className='container-fluid'>
      <div className='container'>
        <h2 className='pb-5'>Our Movie List</h2>
            <div className='row'>
            {moviesData.map((movie) => (
              <div className='col-lg-4 pb-5'>
                <div className="card" style={{ width: "22rem" }} key={movie.id}>
                <img src={movie.moviePoster} className="card-img-top" alt="..." style={{height:"30rem"}}/>
                  <Link to={`/movies/${movie.id}`} className='ListFilms' >
                    {movie.title}
                  </Link>
              </div>
              </div>
          ))}
        </div>
              <div/>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </div>
      </div>
    );
  }
  

export default MovieListPage;