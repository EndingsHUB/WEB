import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const getMovie = async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)    
        ).json();

        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <div>
                    <h2>
                        {movie.title}
                    </h2>
                    <img src={movie.large_cover_image} alt={movie.title}></img>
                    <p>{movie.summary}</p>
                    <ul>
                        {movie.genres.map(g => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>)}
        </div>
    );
}

export default Detail;