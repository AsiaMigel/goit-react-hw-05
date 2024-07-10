import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;

// Ключ API
// 54c9ee53148a57c44a5a4c29d90f210d

// Токен
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGM5ZWU1MzE0OGE1N2M0NGE1YTRjMjlkOTBmMjEwZCIsIm5iZiI6MTcyMDQ0NzQzNi45OTkwMjcsInN1YiI6IjY2OGJhMmRmNTBhZTc1NjhiNTIzYzdmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0TJKl_SGFOZ2Do8OXcORBFJG2FlWgMDO0MZnpqwXvto
