import React, { useContext, useState } from 'react';

import { Container } from './styles';

import Header from '../../components/Header'
import TodoForm from './components/TodoForm';

import TodoFormContext from './components/TodoForm/context';

const Todo: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const context = useContext(TodoFormContext);

  context.add = (e) => {
    console.log(e);
  }


  return (
    <Container>
      <div className="round-bg"></div>

      <Header />

      <div className="todo-list">
        <TodoForm />
      </div>
    </Container>
  );
}

export default Todo;

/* 
  Infos usuario;
  função;
  lista de todos;
*/
