import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: white;
    color: #050505;
    -webkit-font-smoothing: antialiased;
  }
  body, p, input, button {

    font-size: 16px;
    font-family: 'Raleway', sans-serif!important;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }

  .btn {
    width: 100%;
    max-width: 240px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border: 0;
    
    text-transform: uppercase;
    font-weight: bold;
    font-size: .8rem;

    transition: all .2s linear;

    &:hover {
      opacity: .9;
    }
  }
`;
