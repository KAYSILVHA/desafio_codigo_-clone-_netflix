import React, { useEffect, useState } from 'react';
import { getTopRatedMovies, getMovieGenres, getMoviesByGenre } from '../../../Services/MoviesServices';
import "../../../assets/styles/globalStyle.scss";
import "./style.scss";
import { Link } from 'react-router-dom';

function Movies() {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('top-rated');
    const [moviesByGenre, setMoviesByGenre] = useState({});

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
        const fetchMoviesByAllGenres = async () => {
            const moviesByGenre = {};
            for (const genre of genres) {
                const movies = await getMoviesByGenre(genre.id);
                moviesByGenre[genre.id] = movies;
            }
            setMoviesByGenre(moviesByGenre);
        };
        if (genres.length > 0) {
            fetchMoviesByAllGenres();
        }
    }, [genres]);

    const buttonStyle = (genreId) => ({
        backgroundColor: genreId === selectedGenre ? '#ff0000' : '#333',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        margin: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        borderRadius: '4px',
    });

    return (
        <div className="container movies-container">
            <h1>Filmes</h1>
            <div className="navigation">
                <button
                    style={buttonStyle('top-rated')}
                    onClick={() => setSelectedGenre('top-rated')}
                >
                    Mais Votados
                </button>
                {genres.map(genre => (
                    <button
                        key={genre.id}
                        style={buttonStyle(genre.id)}
                        onClick={() => setSelectedGenre(genre.id)}
                    >
                        {genre.name}
                    </button>
                ))}
            </div>

            <div className="movies-grid">
                {selectedGenre === 'top-rated' && topRatedMovies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            <div className="movie-info">
                                <h3>{movie.title}</h3>
                                <p>{movie.release_date.split('-')[0]}</p>
                            </div>
                        </Link>
                    </div>
                ))}

                {selectedGenre !== 'top-rated' && moviesByGenre[selectedGenre] && moviesByGenre[selectedGenre].map(movie => (
                    <div key={movie.id} className="movie-card">
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            <div className="movie-info">
                                <h3>{movie.title}</h3>
                                <p>{movie.release_date.split('-')[0]}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;
