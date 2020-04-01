import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  color: #ff7804;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 80px auto;

  h1 {
    text-align: center;
    align-items: center;
    font-size: 30px;
    display: row;
    flex-direction: row;

    svg {
      height: 40px;
      width: 40px;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`;

export default Container;
