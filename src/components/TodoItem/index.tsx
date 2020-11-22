import React from 'react';

import { Container } from './styles';

export interface TodosProps {
  id: string;
  title: string;
  date: Date;
  done: boolean;
  onClick: (id: string) => void;
}

const TodoItem: React.FC<TodosProps> = ({ title }) => {
  return (
    <Container>
      {title}
    </Container>
  );
}

export default TodoItem;