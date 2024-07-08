import css from "./MovieList.module.css";
import {Link, useLocation} from 'react-router-dom'

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul className={css.movieList}>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                </li>
            ))}

        </ul>
    )
    
};

export default MovieList;
