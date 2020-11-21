import React from 'react';

import { Container } from './styles';

import { useHistory } from 'react-router-dom'

import Lottie from 'react-lottie';

import todoJson from './todo.json';

import logo from '../../assets/ttd.png';

const Home: React.FC = () => {

  const history = useHistory();

  return (
    <Container>
      <div className="round-bg"></div>

      <div className="main">

        <Lottie
          height={200}
          options={{
            animationData: todoJson,
            autoplay: true,
            loop: true
          }}
        />

        <p>Ola! Seja bem-vindo ao</p>
        <img src={logo} alt="TTD Logo"/>

        <div className="description">
          Um App para ajudar você a gerenciar sua vida diária, sem nenhum incômodo! 
        </div>

        <div className="button">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.push('/todo')}
          >
            Ir para Tarefas
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => history.push('/calendar')}
            >
              Ver tarefas concluídas
          </button>
        </div>

        
      </div>
    </Container>
  );
}

export default Home;