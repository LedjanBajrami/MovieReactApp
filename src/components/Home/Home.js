import { Route, Routes } from 'react-router-dom';
import MovieDetailsPage from './MovieDetailsPage';
import MovieListPage from './MovieListPage';
import './Home.css';


function Home() {
    return (
      <div>
        <h1>Welcome to the Home Page!</h1>
        <Routes>
        <Route exact path="/movies" component={MovieListPage} />
        <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
        </Routes>
      </div>
    );
  }

  export default Home;