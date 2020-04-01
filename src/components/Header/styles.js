import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff7804;
  color: #fff;
  height: 50px;

  strong {
      margin-left: 10px;
      font-size: 30px;
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    h1 {
      margin-right: 10px;
      display: flex;
      text-align: right;
      font-size: 14px;
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
