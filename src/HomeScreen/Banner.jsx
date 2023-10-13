import React from "react";
import "../css/HomeScreen.css";
import axios from "../axios/axios";
import requests from "../axios/Request";

function Banner() {
  let [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      let res = await axios.get(requests.fetchNetflixOriginals);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setMovie(
        (movie =
          res.data.results[Math.floor(Math.random() * res.data.results.length)])
      );

      return requests;
    }

    fetchData();
  }, []);

  function truncate(string, l) {
    return string?.length > l ? string.substr(0, l - 1) + "..." : string;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner-container">
        <div className="banner-title"></div>
        <h1>{movie.title || movie.name || movie.original_name}</h1>

        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List </button>
        </div>

        <h1 className="banner-descriptions">
          {truncate(`${movie.overview}`, 150)}
        </h1>
      </div>

      <div className="banner-fadeBottom" />
    </div>
  );
}

export default Banner;
