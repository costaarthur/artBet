import styled from 'styled-components';
import { darken } from 'polished';

export const GameContainer = styled.div`
  max-width: 700px;
  background: #fff;
  /* border-radius: 4px; */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;
  text-align: center;

  div {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    /* flex-direction: row; */
    text-align: center;
    /* padding: 3vw; */
    /* position: relative; */
    /* background: green; */
    @media (max-width: 500px) {
      grid-template-columns: 50% 50%;
      max-width: 250px;
      margin: auto;
      /* background: green; */
    }

    div {
      /* margin-right: 30px; */
      display: block;
    }
  }

  h1 {
    color: #ff7804;
    font-size: 25px;
    text-align: center;
    align-items: center;
    margin-bottom: 5px;
  }

  h3 {
    color: #555555;
    font-size: 17px;
  }

  h4 {
    margin-top: 25px;
    color: #555555;
    font-size: 14px;
    display: row;
    flex-direction: column;
  }

  h6 {
    color: #555555;
    font-size: 14px;
    /* margin-top: 5px; */
  }

  svg {
    margin-right: 10px;
    margin-left: 10px;
  }

  input {
    display: row;
    text-align: center;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px solid #ddd;
    /* border-radius: 4px; */
    color: #555555;
    /* padding: 6px; */
    width: 60px;
    height: 25px;
    /* display: inline; */
    /* float: right; */
  }


  div.button-controls-hilo {
    display: grid;
    grid-template-columns: 50% 50%;
    text-align: center;
    align-items: center;
    justify-content: center;
    /* background: ${props => (props.jogoHl ? '#ff7804' : 'grey')}; */
    max-width: 120px;
    margin: auto auto;
    /* background: black; */

    @media (max-width: 400px) {
      grid-template-columns: 50% 50%;
      max-width: 180px;
      margin: auto;
      /* background: green; */
    }

    button {
      align-items: center;
      justify-content: center;
      margin: auto;

      @media (max-width: 400px) {
        margin-bottom: 10px;
      }
    }
  }

  div.button-controls {
    display: grid;
    grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
    text-align: center;
    align-items: center;
    justify-content: center;
    /* background: ${props => (props.jogoHl ? '#ff7804' : 'grey')}; */
    max-width: 350px;
    margin: auto auto;

    @media (max-width: 400px) {
      grid-template-columns: 33.3% 33.3% 33.3%;
      max-width: 180px;
      margin: auto;
      /* background: green; */
    }

    button {
      align-items: center;
      justify-content: center;
      margin: auto;

      @media (max-width: 400px) {
        margin-bottom: 10px;
      }
    }
  }

  button {
    /* margin: auto; */
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
    /* margin-right: 5px; */

    /* justify-content: center;
    align-items: center; */
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
