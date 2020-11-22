import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  input {
    border: 1px solid #eeee;
    border-radius: 5px;
    height: 50px;
    padding: 15px;
    width: 100%;

    font-size: .9rem;

    transition: all .3s cubic-bezier(0.455, 0.03, 0.515, 0.955);

    &.error {
      border-color: red;
    }
    &:focus {
      border-color: var(--color-secondary);
    }
  }

  >span {
    font-size:  .8rem;
    margin-top: 5px;
    color: red;
    position: absolute;
    left: 0;
    bottom: -20px;
  }

  >svg {
    position: absolute;
    right: 15px;
    top: 0;
    bottom: 0;
    margin: auto 0;

    cursor: pointer;
  }
`;
