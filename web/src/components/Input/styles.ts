import styled from 'styled-components';

export const Container = styled.div`
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

  input {
    flex: 1;
    background: #fff;
    border: 0;
    margin-left: 18px;
    width: auto;
    color: #7a8c99;
  }
`;
