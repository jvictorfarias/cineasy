import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  isLoading: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ad302b;
  width: 85px;
  height: 100%;
  border: 0;
  margin-right: -1px;
  border-radius: 0 4px 4px 0;
  font-weight: bold;
  transition: background-color 0.2s;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.isLoading &&
    css`
      &: disabled;
      cursor: not-allowed;
      opacity: 0.6;

      svg {
        animation: ${rotate} 2s linear infinite;
        margin-right: 10px;
      }
    `}

  &:hover {
    background-color: ${shade(0.2, '#AD302B')};
  }
`;
