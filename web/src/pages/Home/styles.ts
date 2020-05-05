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
  max-width: 100%;
  margin-top: 18px;
  margin-bottom: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 44px;
  width: 80vw;
  background: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  svg {
    margin-left: 14px;
  }
`;

export const SelectContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    color: #e18f4e;
    font-size: 18px;
  }
  select {
    margin-left: 8px;
    appearance: none;
    background: #ad302b;
    padding-left: 4px;
    width: 100px;
    height: 30px;
    border: 1px solid #ad302b;
    border-radius: 4px;
    color: #fff;

    option {
      color: #fff;
      text-align: center;
      font-size: 16px;
      letter-spacing: 0.22px;
    }
  }

  svg {
    margin-left: -20px;
  }
`;
