// import styled, { keyframes, css } from 'styled-components';
import styled from 'styled-components';
import { darken } from 'polished';

export const Topo = styled.div`
  align-items: center;
  justify-content: center;
  margin-left: 30px;

  button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    height: 30px;
    width: 150px;
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

export const Contagem = styled.h1`
  color: #555555;
  text-align: center;
  /* margin-left: 40px; */
`;

export const Divinputs = styled.div`
  display: inline-block;
`;
