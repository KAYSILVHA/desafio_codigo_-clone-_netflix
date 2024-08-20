import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Input } from 'reactstrap';


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
    <Container className='container-fluid'>
      <h2>Login</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Entrar</Button>
    </Container>
  );
}

export default Login;
