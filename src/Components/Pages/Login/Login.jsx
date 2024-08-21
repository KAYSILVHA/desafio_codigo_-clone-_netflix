import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Input } from 'reactstrap';

import "./assets/style/style.scss"


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('auth', 'true');
      navigate('/home');
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <Container className='container-bg d-flex align-items-center justify-content-center'>
      <div className='d-flex flex-column container-data'>
        <h2>Entrar</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mb-3'
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mb-3'
        />
        <Button onClick={handleLogin}>Entrar</Button>
      </div>
    </Container>
  );
}

export default Login;
