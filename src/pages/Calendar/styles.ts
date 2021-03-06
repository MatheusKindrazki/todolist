import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  padding: 50px;

  width: 100%;

  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 550px;
  }

  .todo-list {

    margin: 30px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    max-width: 550px;
    width: 100%;
  }
`;
