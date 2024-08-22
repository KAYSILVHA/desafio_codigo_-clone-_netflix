import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, } from 'reactstrap';
import "./assets/style/style.scss";

import NetflixLogo from "./assets/images/Netflix_Logo_PMS.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    <div className='container-bg'>
      <div className="container d-flex flex-column align-items-center justify-content-center h-100 position-relative">
        <div className='nav-brand'>
          <img src={NetflixLogo} alt="Logo" />
        </div>
        <Card className='border-0 d-flex align-items-center justify-content-center bg-transparent'>
          <CardBody className='d-flex flex-column container-data justify-content-center'>
            <h2 className='mb-4'>Entrar</h2>
            <Form>
              <FormGroup>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='mb-3 input'
                />
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='mb-3 input'
                  />
                  <InputGroupAddon
                    addonType="prepend"
                    onClick={() => setShowPassword(!showPassword)}
                    className='ms-2'
                  >
                    <Button className='btn-show'>
                      {showPassword ? 'Ocultar' : 'Mostrar'}
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <FormGroup className='mb-4'>
                <Input
                  type='checkbox'
                  className='me-2'
                />
                <Label className='label'>Lembre-se de mim!</Label>
              </FormGroup>
            </Form>
            <Button
              onClick={handleLogin}
              className='button'
            >
              Entrar
            </Button>
            <div className='info'>
              <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <span>Saiba mais</span>.</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Login;
