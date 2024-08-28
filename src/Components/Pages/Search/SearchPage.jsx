import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input, InputGroup, InputGroupText, ListGroup, ListGroupItem } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "./style.scss";

import { API_KEY } from '../../../api/tmdb';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`)
        .then(response => setResults(response.data.results))
        .catch(error => console.error('Erro ao buscar filmes:', error));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleItemClick = (id) => {
    navigate(`/movie/${id}`);
  };

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
      <div className="search-page container-fluid d-flex flex-column align-items-center">
        <InputGroup className="input-group input">
          <InputGroupText className='rounded-0 border-0 icon'>
            <i className='fa fa-search' />
          </InputGroupText>
          <Input
            className='rounded-0 border-0 input-form'
            type="text"
            placeholder="Buscar filmes..."
            value={query}
            onChange={handleSearchChange}
          />
        </InputGroup>
        <ListGroup className="mt-3 list">
          {results.map(movie => (
            <ListGroupItem
              key={movie.id}
              onClick={() => handleItemClick(movie.id)}
              className="cursor-pointer list-item d-flex align-items-center"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="cast-member-img"
              />
              {movie.title}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </div >
  );
}

export default SearchPage;
