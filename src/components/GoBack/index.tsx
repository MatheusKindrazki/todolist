import React from 'react';

import { AiOutlineLeft } from 'react-icons/ai'
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const GoBack: React.FC = () => {
  const history = useHistory();

  return (
    <Container type="button" onClick={() => history.goBack()}>
      <AiOutlineLeft size={20} color="var(--color-secondary)"/>
    </Container>
  );
}

export default GoBack;