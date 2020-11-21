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


  .round-bg {
    width: 150%;
    height: 100%;
    position: fixed;

    top: -50%;
    left: -25%;
    background: #F8FBFC;
    
    border-radius:60%;
    z-index: -1;
  }

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
      width: 130px;

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

      .btn-primary {
        background: #3B5798;
        color: white;

        margin: 10px;
      }
      .btn-secondary {
        background: #5A95FF;
        color: white;

        margin: 10px;
      }

    }
  }
`;
