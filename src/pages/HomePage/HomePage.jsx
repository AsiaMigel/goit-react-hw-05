import { useState, useEffect } from "react";
import MovieList from '../../components/MovieList/MovieList'
import { fetchTrendingMovies } from "../../api/movies-api";
import css from './HomePage.module.css'

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(setMovies);
    }, []);

  return (
      <div>
          <h1 className={CSS.titlePage}>Trending films today</h1>
          <MovieList movies={movies}/>
    </div>
  )
}

export default HomePage;