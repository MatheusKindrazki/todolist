import React from 'react';


/* 
  ? Lista de tarefas

  -- As tarefas sejam salvas no navegador;
  -- Dar Done nas tarefas, ou reverter o Done;
  -- Separar essas listas em tarefas finalizadas e ñ finalizadas;
  -- Ter um histórico de tarefas finalizadas por dias;
*/

import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {

  return (
    <>
      <Routes  />
      <GlobalStyles/>
    </>
  )
}

export default App;
