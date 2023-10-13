import axios from "../axios/axios";
import React from "react";

// eslint-disable-next-line react/prop-types
function Row({ title, fetch, isLargeRow = false }) {
  let [movies, setMovies] = React.useState([]);

  let baseURL = `https://image.tmdb.org/t/p/original/`;

  React.useEffect(() => {
    async function fetchData() {
      let res = await axios.get(fetch);
      setMovies(res.data.results);
      return res;
    }
    fetchData();
  }, [fetch]);

  return (
    <div className="row">
      <h2> {title} </h2>

      <div className="row-container">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`${
                  isLargeRow === true ? "isLargeRow" : "notLargeRow"
                }`}
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.original_title}
                key={movie.id}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
