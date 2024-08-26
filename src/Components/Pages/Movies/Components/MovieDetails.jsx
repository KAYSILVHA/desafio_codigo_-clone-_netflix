import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../../../../assets/styles/globalStyle.scss";

import "./style.scss"

const API_KEY = 'd0009c846927c774ef6ff01114b8179e';
function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Erro ao buscar os detalhes do filme:', error));
  }, [id]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=pt-BR`)
      .then(response => setCast(response.data.cast))
      .catch(error => console.error('Erro ao buscar o elenco do filme:', error));
  }, [id]);

  if (!movie) return <p>Carregando...</p>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
      <p><strong>Avaliação:</strong> {movie.vote_average}</p>

      <div>
        <strong>Elenco:</strong>
        <div className="cast-list">
          {cast.length === 0 ? (
            <p>Elenco não disponível.</p>
          ) : (
            cast.map(member => (
              <div key={member.cast_id} className="cast-member">
                {member.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
                    alt={member.name}
                    className="cast-member-img"
                  />
                )}
                <p>{member.name} como {member.character}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    </div>
  );
}

export default MovieDetails;
