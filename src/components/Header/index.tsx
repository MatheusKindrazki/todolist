import React from 'react';

import { AiOutlineLeft } from 'react-icons/ai'

import { Container } from './styles';

import logo from '../../assets/ttd.png';
import { useHistory  } from 'react-router-dom';

const Header: React.FC = () => {

  const history = useHistory()

  return (
    <Container>
      <button type="button" onClick={() => history.goBack()}>
        <AiOutlineLeft size={20} color="var(--color-secondary)"/>
      </button>

      <img src={logo} alt="Logo TodoList"/>
    </Container>
  )
};

export default Header;