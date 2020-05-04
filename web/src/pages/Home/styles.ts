import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 80vw;
  > img {
    justify-content: flex-start;
    width: 60px;
    height: 60px;
    margin: 30px 0 30px 0;
  }
`;

export const CardContainer = styled.ul`
  width: 100%;
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;
