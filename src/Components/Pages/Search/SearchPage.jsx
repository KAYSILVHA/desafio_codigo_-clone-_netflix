import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input, ListGroup, ListGroupItem } from 'reactstrap';

const API_KEY = 'd0009c846927c774ef6ff01114b8179e'; // Sua chave da API

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
    <div className="search-page">
      <Input 
        type="text" 
        placeholder="Buscar filmes..." 
        value={query} 
        onChange={handleSearchChange} 
      />
      <ListGroup className="mt-3">
        {results.map(movie => (
          <ListGroupItem 
            key={movie.id} 
            onClick={() => handleItemClick(movie.id)} 
            className="cursor-pointer"
          >
            {movie.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default SearchPage;
