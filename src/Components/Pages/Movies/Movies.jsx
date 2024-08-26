import React, { useEffect, useState } from 'react';
import { getTopRatedMovies, getMovieGenres, getMoviesByGenre } from '../../../Services/MoviesServices';
import "../../../assets/styles/globalStyle.scss";

import "./style.scss"
import { Link } from 'react-router-dom';

function Movies() {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [moviesByGenre, setMoviesByGenre] = useState([]);

    console.log("moviesByGenre:". moviesByGenre);
    console.log("genres:", genres);
    console.log("moviesByGenre:", moviesByGenre);
    console.log("selectedGenre:", selectedGenre);


    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            const movies = await getTopRatedMovies();
            setTopRatedMovies(movies);
        };
        fetchTopRatedMovies();
    }, []);

    useEffect(() => {
        const fetchGenres = async () => {
            const genresList = await getMovieGenres();
            setGenres(genresList);
        };
        fetchGenres();
    }, []);

    useEffect(() => {
        if (selectedGenre) {
            const fetchMoviesByGenre = async () => {
                const movies = await getMoviesByGenre(selectedGenre);
                setMoviesByGenre(movies);
            };
            fetchMoviesByGenre();
        }
    }, [selectedGenre]);

    return (
        <div className="movies-container">
            <h2>Filmes</h2>
            <div className="tabs">
                <button onClick={() => setSelectedGenre(null)}>Mais Votados</button>
                {genres.map(genre => (
                    <button key={genre.id} onClick={() => setSelectedGenre(genre.id)}>
                        {genre.name}
                    </button>
                ))}
            </div>

            <div className="movies-list">
                {!selectedGenre && topRatedMovies.map(movie => (
                    <div key={movie.id} className="movie-item">
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                            <p>{movie.title}</p>
                        </Link>
                    </div>
                ))}

                {selectedGenre && moviesByGenre.map(movie => (
                    <div key={movie.id} className="movie-item">
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                            <p>{movie.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;
