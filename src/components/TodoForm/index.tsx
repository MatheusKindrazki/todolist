import React, { useCallback, useState, useContext, memo } from 'react';

import classNames from 'classnames';

import { Container } from './styles';

import { AiOutlineEnter } from 'react-icons/ai'

import ContextForm from './context';

const TodoForm: React.FC = () => {

  const { add } = useContext(ContextForm)
  
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleAdd = useCallback(() => {
    if(!input) {
      setError(true);
      return;
    };

    add(input);

    setInput('');

    if(error) {
      setError(false);
    }

  },[add, error, input])

  return (
    <Container className="todo-form">
      <input 
        className={classNames({
          error
        })}
        type="text"
        value={input}
        placeholder="Adicionar tarefa..."
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        onChange={(e) => setInput(e.target.value)}
        />
      <AiOutlineEnter  size={20} color="var(--color-secondary)" onClick={handleAdd} />
      {error && <span>Você deve preencher o campo acima para adicionar uma tarefa</span>}
    </Container>
  );
}

export default memo(TodoForm);