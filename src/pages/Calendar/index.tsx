import React from 'react';
import GoBack from '../../components/GoBack';
import Logo from '../../components/Logo';
import HeaderDate from './components/HeaderDate';

import { Container } from './styles';

const Calendar: React.FC = () => {
  return (
    <Container>
      <div className="round-bg"></div>

      <header>
        <GoBack />
        <Logo  style={{ maxWidth: 70 }}/>
      </header>

      <HeaderDate />

    </Container>
  )
}

export default Calendar;