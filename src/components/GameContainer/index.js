import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

const GameContainer = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;

  h1 {
    color: #ff7804;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* text-align: center; */
  }

  h3 {
    color: #555555;
    font-size: 17px;
  }

  h4 {
    margin-top: 25px;
    color: #555555;
    font-size: 14px;
  }

  h6 {
    color: #555555;
    font-size: 14px;
    margin-top: 5px;
  }

  svg {
    margin-right: 10px;
    margin-left: 10px;
  }

  input {
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #555555;
    padding: 6px;
    width: 60px;
    height: 25px;
  }

  button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    height: 20px;
    width: 50px;
    background-color: #ff7804;

    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 5px;
    margin-right: 5px;

    justify-content: center;
    align-items: center;
    transition: background 0.2s;
    /* padding: 6px; */

    &:hover {
      background: ${darken(0.05, '#ff7804')};
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;

export default GameContainer;
