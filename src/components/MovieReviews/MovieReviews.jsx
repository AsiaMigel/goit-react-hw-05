import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api/movies-api";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    console.log('reviews', reviews);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews)
    }, [movieId]);

  return (
      <div>
          <h2>Review</h2> 
          <ul>
              {reviews.map(review => (
                  <li key={review.id}>
                      <h3>{review.author}</h3>
                      <p>{review.content}</p>
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default MovieReviews