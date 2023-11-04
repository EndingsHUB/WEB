import {Link} from "react-router-dom";

function Movie({id, coverImge, title, summary, genres}) {
    return (
        <div>
            <h2>
                <Link to={`/Movie/${id}`}>{title}</Link>
            </h2>
            <img src={coverImge} alt={title}></img>
            <p>{summary}</p>
            <ul>
                {genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

export default Movie;