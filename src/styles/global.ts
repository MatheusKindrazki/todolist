import { createGlobalStyle } from 'styled-components';

import bg from '../assets/bg.svg';

export default createGlobalStyle`

  :root {
    --color-primary: #3B5798;
    --color-secondary: #5A95FF;
  }

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

    &.btn-primary {
      background: var(--color-primary);
      color: white;

      margin: 10px;
    }
    &.btn-secondary {
      background: var(--color-secondary);
      color: white;

      margin: 10px;
    }
  }

  .round-bg {
    width: 100%;
    height: 50vh;
    position: fixed;

    top: 0%;
    left: 0%;

    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    
    z-index: -1;
  }
`;
