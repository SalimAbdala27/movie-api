import "./App.scss";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Info from "./components/Info/Info";

function App() {
    const [openInfo, setOpenInfo] = useState(false);
    const [moviesApi, setMoviesApi] = useState([]);
    const getMoviesApi = () => {
        fetch(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=66a06838a741ef3a28ebc20e4f61191e"
        )
            .then((response) => response.json())
            .then((jsonResponse) => {
                setMoviesApi(jsonResponse.results);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => getMoviesApi(), []);
    console.log(moviesApi);
    const imageUrl = `https://image.tmdb.org/t/p/original${moviesApi.poster_path}`;
    return (
        <div className="App">
            <Nav />
            {moviesApi ? moviesApi.map((movie) => {
                return (
                    <div>
                        <p>{movie.id}</p>
                        <p>{movie.release_date}</p>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="imgageForPoster" />
                    </div>
                )
            }) : null}
            {openInfo && <Info />}
            {moviesApi ? <p>{moviesApi.id}</p> : null}
            {moviesApi.release_date}
            <button onClick={() => setOpenInfo((prevOpenInfo) => !prevOpenInfo)}>OPEN INFO</button>
            <img src={imageUrl} alt="" className="imgageForPoster" />
        </div>
    );
}

export default App;
