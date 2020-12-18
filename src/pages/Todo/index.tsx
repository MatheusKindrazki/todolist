import React, { useContext, useState } from 'react';

import { v4 as uuid } from 'uuid'

import { Container } from './styles';

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Header from '../../components/Header'
import TodoForm, {  } from './components/TodoForm';

import TodoFormContext from './components/TodoForm/context';

import TodoItem, { TodoProps } from './components/TodoItem'

type Todos = Omit<TodoProps, 'onAdd' | 'onDelete'>

const Todo: React.FC = () => {
  const [todos, setTodos] = useState([] as Todos[]);

  const context = useContext(TodoFormContext);

  context.add = (e) => {
    const newTodo: Todos = {
      id: uuid(),
      title: e,
      date: new Date(),
      done: false
    }

    const rewriteTodos = [...todos, newTodo];

    setTodos(rewriteTodos)
  }

  return (
    <Container>
      <div className="round-bg"></div>

      <Header />

      <div className="todo-list">
        <TodoForm />

      <TransitionGroup className="todo-group">
        {todos?.map((todo) => (
          <CSSTransition
            key={todo.id}
            timeout={{
              enter: 500,
              exit: 300,
              appear: 240
            }}
            classNames="batata"
          >
          <TodoItem
          key={todo.id}
          onAdd={() => console.log()}
          onDelete={() => console.log()}
          {...todo}
          />
          </CSSTransition>
          ))}
      </TransitionGroup>
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
