import styled from 'styled-components';

interface ButtonProps {
  done: boolean
}

export const Container = styled.button<ButtonProps>`
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.0416667);
  border-radius: 3px;
  text-align: left;

  width: 100%;
  outline: none;
  border: none;

  padding: 15px;
  padding-left: 40px;

  word-wrap: break-word;

  + button {
    margin-top: 10px;
  }

  font-size: .9rem;
  font-weight: 500;

  .complete-checkbox {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5px;
    margin: 0 auto;

    &:before {
      content: '';
      top: 0;
      bottom: 0;
      left: 4px;
      margin: auto 0;

      width: 20px;
      height: 20px;
      border: 1px solid #eee;
      background: #f5f5f5;
      position: absolute;
      border-radius: 50%;

      transition: all .2s ease-in-out;
    }
  }

  &.done {

    text-decoration: line-through; 
    color: rgba(0, 0, 0, 0.3);

    .complete-checkbox::before {
      background: transparent;
      border-color: transparent;
    }
  }
`;
