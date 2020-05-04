import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;

  img {
    flex: 1;
    max-width: 325px;
  }

  strong {
    margin-top: 36px;
    font-size: 24px;
    letter-spacing: 0.26px;
    line-height: 29px;
    font-weight: normal;
    text-align: center;
    max-width: 250px;
  }

  span {
    margin-top: 12px;
    color: #7a8c99;
    letter-spacing: 0.17px;
    line-height: 19px;
    font-size: 16px;
  }
`;
