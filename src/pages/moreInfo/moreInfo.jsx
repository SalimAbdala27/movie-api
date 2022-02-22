import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
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
          .catch(err => console.log(err))
    };


    const genres = movieID.genres;
    const posterImgUrl = `https://image.tmdb.org/t/p/original${movieID.poster_path}`;
    const backgroundImgUrl = `https://image.tmdb.org/t/p/original${movieID.backdrop_path}`;
    const king = 'https://image.tmdb.org/t/p/original/4OTYefcAlaShn6TGVK33UxLW9R7.jpg';


    useEffect(() => {fetchMovieID()}, []);

    console.log(fetchMovieID)
  return (
    <div class="movie-card">
        <div class="container">
        <a href="#"><img src={posterImgUrl} alt="cover" class="cover" /></a>    
        <div class="hero" backgroundImgUrl={king}>
            <div class="details">
                <div class="title1">{movieID.original_title} <span>Age rating</span></div>
                <fieldset class="rating">
                    <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" checked /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                </fieldset>
                
                <span class="likes">{movieID.vote_average}</span>
            
            </div> 
            {/* <!-- end details --> */}
            
        </div> 
        {/* <!-- end hero --> */}
        
        <div class="description">
            <div class="column1">
                {genres?.map((genre) => {
                    return (
                        <div>
                            <span className="tag">{(genre.name)}</span>
                        </div>
                    )
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
      )
    }
    // <div>{movieID.id}</div>

export default MoreInfo