
import React, {useEffect, useState} from "react";

const movieApi = "https://node-on-heroku-1124.herokuapp.com/api/movies"

const MovieApiClient = () => {
    const[movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(movieApi)
            .then(response => response.json())
            .then(movies => setMovies(movies))
    }, []);

    const deleteMovie = (movie) =>
        fetch(`${movieApi}/${movie._id}`,{method: 'DELETE'})
            .then(response => response.json())
            .then(movies => setMovies(movies));

    const [movie, setMovie] = useState({title: '', rating: 2.5});
    const onMovieTitleChange = (event) =>
        setMovie({...movie, title: event.target.value});
    const createMovieClickHandler = () =>
        fetch(movieApi, {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    const saveMovie = () =>
        fetch(`${movieApi}/${movie._id}`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type':'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        onClick={saveMovie}
                        className="btn btn-primary ms-2 float-end">
                        Save
                    </button>
                    <button
                        onClick={createMovieClickHandler}
                        className="btn btn-success float-end">
                        Create
                    </button>
                    <input className="form-control"
                           value={movie.title}
                           onChange={onMovieTitleChange}
                           style={{width: "70%"}}/>


                </li>

                {

                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>
                            {movie.title} {movie.rating}
                            <button onClick={() => setMovie(movie)}
                                    className="btn btn-primary float-end ms-2">
                                Edit
                            </button>

                            <button onClick={() => deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>
                        </li>

                    )
                }

            </ul>
        </div>
    )
};
export default MovieApiClient;
