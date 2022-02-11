import Movie from "../Movie/Movie";
import "./Info.scss";

const Info = (props) => {
    const { movieData } = props;
    return (
        <div className="movieList">
            {movieData ? movieData.map((movie) => {
                return (
                    <div>
                        <Movie movie={movie} />
                    </div>
                )
            }) : null}
        </div>
    );
};

export default Info;
