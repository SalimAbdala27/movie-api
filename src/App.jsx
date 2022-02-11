import "./App.scss";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Info from "./components/Info/Info";
import MoreInfo from "./pages/moreInfo/moreInfo";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [openInfo, setOpenInfo] = useState(false);
  const [moviesApi, setMoviesApi] = useState([]);
  const [filter, setFilter] = useState("/now_playing");

  const nowPlaying = () => {
    setFilter("/now_playing");
    setOpenInfo((prevOpenInfo) => !prevOpenInfo);
  };

  const latest = () => {
    setFilter("/top_rated");
    setOpenInfo((prevOpenInfo) => !prevOpenInfo);
  };
  console.log(filter);

  const getMoviesApi = () => {
    fetch(
      `https://api.themoviedb.org/3/movie${filter}?api_key=66a06838a741ef3a28ebc20e4f61191e`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMoviesApi(jsonResponse.results);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => nowPlaying, [filter]);
  useEffect(() => latest, [filter]);
  useEffect(() => getMoviesApi(), []);
  console.log(moviesApi);

  const imageUrl = `https://image.tmdb.org/t/p/original${moviesApi.poster_path}`;

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/moreInformation">
            <MoreInfo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* hide these buttons with state from the setopeninfo prior */}
        {openInfo && (
          <Info
            openInfo={openInfo}
            setOpenInfo={setOpenInfo}
            movieData={moviesApi}
          />
        )}
        <button onClick={() => latest()}>Latest films</button>
        <button onClick={() => nowPlaying()}>OPEN INFO</button>
      </div>
    </Router>
  );
}

export default App;
