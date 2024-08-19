// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate('/home');
    } else {
      alert('Por favor, insira e-mail e senha válidos');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input 
        type="password" 
        placeholder="Senha" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>Entrar</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#141414',
    color: 'white'
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    width: '300px',
    fontSize: '16px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

export default Login;
