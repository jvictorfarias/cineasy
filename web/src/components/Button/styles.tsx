import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ad302b;
  width: 85px;
  height: 100%;
  border: 0;
  margin-right: -1px;
  border-radius: 0 4px 4px 0;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#AD302B')};
  }
`;
