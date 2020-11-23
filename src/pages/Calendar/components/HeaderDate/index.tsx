import { addDays, format, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import React, { useCallback, useMemo, useState } from 'react';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

import { Container } from './styles';

const HeaderDate: React.FC = () => {
  const [date, setDate] = useState(new Date());
  
  const dateFormatted = useMemo(
    () =>
      format(date, "d 'de' MMMM", {
        locale: pt,
      }),
    [date]
  );
  
  const handlePrevDay = useCallback(() => {
    setDate(subDays(date, 1));
  },[date])

  const handleNextDay = useCallback(() => {
    setDate(addDays(date, 1));
  },[date])

  return (
    <Container>
      <span>Tarefas do dia:</span>
      <button type="button" onClick={handlePrevDay}>
        <AiOutlineLeft color="var(--color-primary)" size={36} />
      </button>
      <strong>{dateFormatted}</strong>
      <button type="button" onClick={handleNextDay}>
        <AiOutlineRight color="var(--color-primary)" size={36} />
      </button>
    </Container>
  );
}

export default HeaderDate;