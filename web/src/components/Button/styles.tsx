import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #f34426;
  width: 80px;
  height: 100%;
  border: 0;
  border-radius: 0 4px 4px 0;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#f34426')};
  }
`;
