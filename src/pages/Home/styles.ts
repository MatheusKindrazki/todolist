import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  max-width: 100%;

  overflow: hidden!important;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  .main {
    width: 100%;
    max-width: 450px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    flex-direction: column;

    p {
      margin-bottom: 15px;
      font-size: 1.1rem;
      font-weight: 500;

    }

    img {
      margin-top: 10px;
      margin-bottom: 15px;
    }

    .description {
      margin-top: 25px;
      margin-bottom: 15px;
      font-size: 1rem;
      font-weight: 500;

      text-align: center;
      max-width: 300px;
    }

    .button {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 50px;

      width: 100%;
    }
  }
`;
