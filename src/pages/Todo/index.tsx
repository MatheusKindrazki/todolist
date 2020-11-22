import React, { useCallback, useContext, useMemo, useState } from 'react';

import { v4 as uuid } from 'uuid'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Logo from '../../components/Logo';
import TodoForm from '../../components/TodoForm';
import TodoFormContext from '../../components/TodoForm/context';
import TodoItem, { TodosProps } from '../../components/TodoItem';

import { Container } from './styles';

type Todos = Omit<TodosProps, 'onClick'>;

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState([] as Todos[]);
  const [showMessageTodoComplete, setShowMessageTodoComplete] = useState(false);

  const context = useContext(TodoFormContext);

  context.add = (e) => {
    const newTodo: Todos = {
      id: uuid(),
      title: e,
      date: new Date(),
      done: false,
    }

    setTodos([...todos, newTodo])
  }

  const handleCompleted = useCallback((id) => {
    
    const findAndCompleted = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      }

      return todo;
    });

    setTodos(findAndCompleted)

  },[todos])

  const renderTodoNotDone = useMemo(() => {
    return todos.filter(todo => todo.done === false)

  },[todos])

  const renderTodoDone = useMemo(() => {
    const hasTodos = todos.filter(todo => todo.done === true)

    if(hasTodos.length) {
      setShowMessageTodoComplete(true)
    } else {
      setShowMessageTodoComplete(false)
    }

    return hasTodos;
  },[todos])


  return (
    <Container>
      <div className="round-bg"></div>
      <Logo  style={{ maxWidth: 70 }}/>

      <div className="todo-list">
        <TodoForm />

        <TransitionGroup className="todo-group">
          {renderTodoNotDone?.map((todo, index) =>  (
            <CSSTransition
              key={index}
              timeout={{
                enter: 500,
                exit: 300,
                appear: 240
              }}
              classNames="move"
            >
              <TodoItem key={index} onClick={handleCompleted} {...todo}/>
            </CSSTransition>
          ))}

          {showMessageTodoComplete && (
            <div className="message">
              <h4>Tarefas concluídas</h4>
            </div>
          )}

          {renderTodoDone?.map((todo, index) =>  (
            <CSSTransition
            key={index}
            timeout={{
              enter: 500,
              exit: 300,
              appear: 240
            }}
            classNames="move"
            > 
              <TodoItem key={index} onClick={handleCompleted} {...todo}/>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </Container>
  );
}

export default TodoList;