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

// export const Form = styled.form`
//   margin-top: 30px;
//   display: flex;
//   flex-direction: row;
//   input {
//     flex: 1;
//     border: 1px solid ${props => (props.error ? '#ff6b6b' : '#eee')};
//     padding: 10px 15px;
//     border-radius: 4px;
//     font-size: 16px;
//     transition: border 0.25s ease-out;
//   }
// `;

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// export const SubmitButton = styled.button.attrs(props => ({
//   type: 'submit',
//   disabled: props.loading,
// }))`
//   background: #7159a1;
//   border: 0;
//   padding: 0 15px;
//   margin-left: 10px;
//   border-radius: 4px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &[disabled] {
//     cursor: not-allowed;
//     opacity: 0.6;
//   }
//   ${props =>
//     props.loading &&
//     css`
//       svg {
//         animation: ${rotate} 2s linear infinite;
//       }
//     `}
// `;

// export const List = styled.ul`
//   list-style: none;
//   margin-top: 30px;
//   li {
//     padding: 15px 0;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     & + li {
//       border-top: 1px solid #eee;
//     }
//     a {
//       color: #7159c1;
//       text-decoration: none;
//     }
//   }
// `;

// export const ShowError = styled.p`
//   margin-top: 5px;
//   border: 1px solid ${props => (props.error ? '#ff6b6b' : '#eee')};
// `;
