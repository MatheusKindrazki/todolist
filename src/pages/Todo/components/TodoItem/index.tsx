import React, { memo } from 'react';

import classNames from 'classnames'

import { AiFillDelete } from 'react-icons/ai'

import Lottie from 'react-lottie'

import complete from './complete.json'

import { Container } from './styles';

export interface TodoProps {
  id: string;
  title: string;
  date: Date;
  done: boolean;
  onAdd: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoProps> = (props) => {

  const { id, done, onAdd, onDelete, title } = props

  return (
    <Container
      className={classNames({
        done,
      })}
      done={done}
    >

    <button onClick={() => onAdd(id)} className="complete-checkbox" >
      {done && (
        <Lottie
          width={50}
          options={{
            animationData: complete,
            autoplay: true,
            loop: false
          }}
        />
      )}
    </button>
    {title}

    <button type="button" className="delete-todo" onClick={() => onDelete(id)} >
      <AiFillDelete  size={15} color="red" />
    </button>

    </Container>
  );
}

export default memo(TodoItem);