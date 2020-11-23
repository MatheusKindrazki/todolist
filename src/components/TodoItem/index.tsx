import React, { memo } from 'react';

import classNames from 'classnames';
import Lottie from 'react-lottie';

import { AiFillDelete } from 'react-icons/ai'

import { Container } from './styles';
import complete from './complete.json';
export interface TodosProps {
  id: string;
  title: string;
  date: Date;
  done: boolean;
  onAdd: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodosProps> = ({ title, id, done, onDelete, onAdd }) => {
  return (
    <Container 
      className={classNames({
        done
      })}
      done={done}
    >
      <button onClick={() => onAdd(id)} className="complete-checkbox">
        {done && (
          <Lottie
            width={30}
            options={{
              animationData: complete,
              autoplay: true,
              loop: false,
            }}
          />
        )}
      </button>
      {title}

      <button
        type="button"
        className="delete-todo"
        onClick={() => onDelete(id)}
      >
        <AiFillDelete size={15} color="red"/>
      </button>
    </Container>
  );
}

export default memo(TodoItem);