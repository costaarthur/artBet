import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff4500;
  height: 50px;

  div {
    /* text-align: right; */
    margin-left: 10px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    /* color: #fff; */

    strong {
      font-size: 20px;
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    h1 {
      display: flex;
      text-align: right;
      font-size: 14px;
      justify-content: space-between;
    }
  }
`;

// export const Cart = styled(Link)`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   transition: opacity 0.2s;

//   &:hover {
//     opacity: 0.7;
//   }

//   div {
//     /* text-align: right; */
//     margin-right: 10px;
//     justify-content: space-between;

//     strong {
//       display: block;
//       color: #fff;
//     }

//     span {
//       font-size: 12px;
//       color: #999;
//     }
//   }
// `;
