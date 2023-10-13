import React, { useEffect } from "react";
import Nav from "../HomeScreen/Nav";
import Banner from "../HomeScreen/Banner";
import requests from "../axios/Request";
import Row from "../HomeScreen/Row";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  let dispatch = useDispatch();
  let currentUser = useSelector((store) => store.user.currentUser);
  let navigate = useNavigate();
  useEffect(() => {
    if (currentUser === null) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div className="homeScreen">
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        fetch={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" fetch={requests.fetchTrending} />
      <Row title="Top Rated" fetch={requests.fetchTopRated} />
      <Row title="Action Movies" fetch={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetch={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetch={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetch={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetch={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
