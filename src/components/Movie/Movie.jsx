import React from 'react';
import "./Movie.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Movie = (props) => {
    const { movie,  setOpenInfo, openInfo} = props;

    return (
        <div className="movieItem">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} className="imageForPoster" />
            <section className="movie-info">
                <h3 className="movie-title">{ movie.original_title }</h3>
                <p className="movie-text">{ movie.overview }</p>
                <Link exact to="/moreInformation" >
                    <button onClick={() => setOpenInfo(false)} className="more-info">More Information</button>
                </Link>
            </section>
        </div>
    )
}

export default Movie