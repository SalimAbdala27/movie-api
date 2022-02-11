import React from 'react'
import "./Movie.scss";


const Movie = (props) => {
    const { movie } = props;

    return (
        <div className="movieItem">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} className="imageForPoster" />
            <section className="movie-info">
                <h3 className="movie-title">{ movie.original_title }</h3>
                <p className="movie-text">{ movie.overview }</p>
            </section>
        </div>
    )
}

export default Movie