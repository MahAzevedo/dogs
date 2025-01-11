import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PASSWORD_LOST } from '../../api';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const {data, loading, error, request} = useFetch();

  async function handleSubmit(event) {
    event.preventDefautl();
    if(login.validate()) {
    const {url, options} = PASSWORD_LOST({
      login: login.value, 
      url: window.location.href.replace('perdeu', 'resetar'),
    });
    const {json} = await request(url, options);
    console.log(json)
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha" />   
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{color: '#4c1'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
      <Input label="E-mail / Usuário" type="text" name="login" {...login} />
      {loading ? (
        <Button disabled>Enviando...</Button>
      ) : (
         <Button>Enviar E-mail</Button>
      )}
      </form>
    )}
      <Error error={error} /> 
    </section>
  );
};

export default LoginPasswordLost;
