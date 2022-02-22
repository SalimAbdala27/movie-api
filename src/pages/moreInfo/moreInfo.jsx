import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./moreInfo.scss";

const MoreInfo = (props) => {
  const { movieId } = useParams();
  const [movieID, setMovieID] = useState([]);
  // const { movie, key} = props
  // fetch for the specific movie
  //
  const fetchMovieID = () => {
    console.log("Getting");
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=66a06838a741ef3a28ebc20e4f61191e`
    )
      .then((response) => response.json())
      .then((jsonResponse) => setMovieID(jsonResponse))
      .catch((err) => console.log(err));
  };

  const genres = movieID.genres;
  const posterImgUrl = `https://image.tmdb.org/t/p/original${movieID.poster_path}`;
  const backgroundImgUrl = `https://image.tmdb.org/t/p/original${movieID.backdrop_path}`;
  const king =
    "https://image.tmdb.org/t/p/original/4OTYefcAlaShn6TGVK33UxLW9R7.jpg";

  useEffect(() => {
    fetchMovieID();
  }, []);

  console.log(fetchMovieID);
  return (
    <div class="movie-card">
      <div class="container">
        <a href="#">
          <img src={posterImgUrl} alt="cover" class="cover" />
        </a>
        <div
          class="hero"
          style={{
            background: `url(${backgroundImgUrl})`,
            backgroundSize: "cover",
          }}
        >
          <div class="details">
            <div class="title1">{movieID.original_title}</div>
            <span className="duration">
              <p>Duration: {movieID.runtime} minutes</p>
            </span>
            <span class="likes">{movieID.vote_average}</span>
          </div>
          {/* <!-- end details --> */}
        </div>
        {/* <!-- end hero --> */}

        <div class="description">
            <div class="column1">
              {genres?.map((genre) => {
                return <span className="tag">{genre.name}</span>;
              })}
            </div>
          {/* <!-- end column1 --> */}

          <div class="column2">
            <p>{movieID.overview}</p>
          </div>
          {/* <!-- end column2 --> */}
        </div>
        {/* <!-- end description --> */}
      </div>
      {/* <!-- end container --> */}
    </div>
    //   <!-- end movie-card -->
  );
};
// <div>{movieID.id}</div>

export default MoreInfo;
