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
          .catch(err => console.log("err"))
    };
    useEffect(() => {fetchMovieID()}, []);

    console.log(fetchMovieID)
  return (
    <div>{movieID.id}</div>
  )
}

export default MoreInfo