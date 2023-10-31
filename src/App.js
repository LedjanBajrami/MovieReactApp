import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MovieListPage from './components/Home/MovieListPage';
import MovieDetailsPage from './components/Home/MovieDetailsPage';
import GenreListPage from './components/Home/GenreListPage';
import Navbar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<MovieListPage />} />
          <Route path="/movies/genre/:genre" element={<MovieListPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
