import React from 'react';

import classNames from 'classnames'

import { Container } from './styles';

import Lottie from 'react-lottie';

import complete from './complete.json';
export interface TodosProps {
  id: string;
  title: string;
  date: Date;
  done: boolean;
  onClick: (id: string) => void;
}

const TodoItem: React.FC<TodosProps> = ({ title, id, done, onClick }) => {
  return (
    <Container 
      className={classNames({
        done
      })}
      onClick={() => onClick(id)} done={done}
    >
      <div className="complete-checkbox">
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
      </div>
      {title}
    </Container>
  );
}

export default TodoItem;