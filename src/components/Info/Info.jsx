import Movie from "../Movie/Movie";
import "./Info.scss";

const Info = (props) => {
    const { movieData, setOpenInfo, openInfo } = props;
    return (
        <div className="movieList">
            {movieData ? movieData.map((movie) => {
                return (
                    <div>
                        <Movie openInfo={openInfo} setOpenInfo={setOpenInfo}  movie={movie} key={movie.id} />
                    </div>
                )
            }) : null}
        </div>
    );
};

export default Info;
