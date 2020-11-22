import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  padding: 50px;

  width: 100%;

  margin: 0 auto;

  .todo-list {

    margin: 30px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    max-width: 550px;
    width: 100%;
  }

  .todo-group {
    margin-top: 30px;
    width: 100%;
  }

  .move-enter {
    opacity: 0.01;
    transform: translate(-40px, 0)
  }

  .move-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 500ms ease-in;
  }

  .move-exit {
    opacity: 1;
    transform: translate(0, 0)
  }

  .move-exit-active {
    opacity: 0.01;
    transform: translate(40px, 0);
    transition: all 500ms ease-in;
  }
`;
