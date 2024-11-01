import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

const LoginForm = () => {
 

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
    .then((response) => {
      (response);
      return response.json();
    })
    .then((json) => {
      (json);
    });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
      </form>
      <Button>Entrar</Button>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
