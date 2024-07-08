import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api/movies-api";
import MovieList from "../../components/MovieList/MovieList";
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (query) {
      fetchMovies(query);
    }
  }, [query]);
  const fetchMovies = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const movies = await searchMovies(query);
      setMovies(movies);
    } catch (error) {
      setError("Error fetching movies: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const newQuery = form.elements.query.value;
    setSearchParams({ query: newQuery });
    setQuery(newQuery);
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};
export default MoviesPage;
