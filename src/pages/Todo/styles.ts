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

  .todo-group {
    width: 100%;
    max-height: 65vh;
    overflow: hidden;

    padding-top: 30px;
  }

  .batata-enter {
    opacity: 0.01;
    transform: translate(-10px, 0)
  }

  .batata-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 500ms ease-in;
  }

  .batata-exit {
    opacity: 1;
    transform: translate(0, 0)
  }

  .batata-exit-active {
    opacity: 0.01;
    transform: translate(40px, 0);
    transition: all 500ms ease-in;
  }

`;
