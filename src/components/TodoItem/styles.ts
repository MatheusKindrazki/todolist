import styled from 'styled-components';

interface DivProps {
  done: boolean
}

export const Container = styled.div<DivProps>`
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.0416667);
  border-radius: 3px;
  text-align: left;

  width: 100%;

  padding: 15px;
  padding-left: 40px;
  padding-right: 40px;

  word-wrap: break-word;

  + div {
    margin-top: 10px;
  }

  font-size: .9rem;
  font-weight: 500;

  .complete-checkbox {
    position: absolute;
    outline: none;
    border: none;
    top: 0;
    bottom: 0;
    left: 5px;
    margin: 0 auto;
    background: transparent;

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

  .delete-todo {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    width: 40px;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999!important;

    transition: all .2s linear;

    &:hover {
      opacity: 0.5;
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
