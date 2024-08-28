import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "../../../../assets/styles/globalStyle.scss";
import { PieChart } from 'react-minimal-pie-chart';

import "./style.scss"

import { API_KEY } from '../../../../api/tmdb';
import { Button } from 'reactstrap';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const navigate = useNavigate();

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

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('pt-BR');
  };

  const votePercentage = Math.round(movie.vote_average * 10); // Arredondando a porcentagem

  return (
    <div
    style={{ background: "black", padding: '50px' }}
  >
    <Button
      className='mx-2 mb-3'
      onClick={() => navigate('/home')}
    >
      Voltar
    </Button>
    <div className="container-fluid movie-details align-items-center justify-content-center">
      <div className='container'>
        <div className="d-flex w-100 container-info flex-lg-row flex-column text-lg-start text-center align-items-lg-start justify-content-lg-start align-items-center justify-content-center">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <div className='w-100'>
            <h1>{movie.title}</h1>
            <div className="flex-wrap d-flex align-items-center date-genrer justify-content-lg-start justify-content-center">
              <p className='m-0'><strong>{formatDate(movie.release_date)}</strong></p>
              {movie.genres.map(genre => (
                <Button color="danger" key={genre.id}>{genre.name}</Button>
              ))}
            </div>

            <p className='text-justify'>{movie.overview}</p>
            <div className='d-flex align-items-center justify-content-lg-start justify-content-center container-rating'>
              <p className='m-0'><strong>Avaliação:</strong></p>
              <div className="rating-chart">
                <PieChart
                  data={[{ value: votePercentage, color: '#E38627' }]}
                  totalValue={100}
                  lineWidth={15}
                  label={({ dataEntry }) => `${dataEntry.value}%`}
                  labelStyle={{ fill: '#FFFFFF', fontSize: '20px', fontFamily: 'sans-serif' }}
                  labelPosition={0}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='container-cast'>
          <strong>Elenco:</strong>
          <div className="cast-list">
            {cast.length === 0 ? (
              <p>Elenco não disponível.</p>
            ) : (
              <div className="cast-container">
                {cast.map(member => (
                  <div key={member.cast_id} className="cast-member">
                    {member.profile_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
                        alt={member.name}
                        className="cast-member-img"
                      />
                    )}
                    <p className='text'>{member.name} como {member.character}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MovieDetails;