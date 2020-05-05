import styled, { css } from 'styled-components';

interface CardStyleProps {
  emptyImg: boolean;
}

export const Container = styled.li<CardStyleProps>`
  width: 100%;
  height: 180px;
  background: transparent;
  border-radius: 4px;
  box-shadow: 0 4px 30px 0 rgba(5, 10, 13, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    flex: 1;
    border-radius: 4px;
    max-width: 100%;
    height: 100%;

    ${(props) =>
      props.emptyImg &&
      css`
        background: #ad302b;
        height: 100%;
      `}
  }
`;

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #212932;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.2s;

  p {
    position: absolute;
    left: 5px;
    bottom: 30px;
    font-size: 20px;
    text-align: left;
    text-justify: auto;
    max-width: 110px;
    line-height: 24px;
    letter-spacing: 0.22px;
  }

  span {
    position: absolute;
    left: 5px;
    bottom: 5px;
    font-size: 14px;
    line-height: 19px;
    text-align: left;
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px 8px 0 0;
  }

  &:hover {
    opacity: 0.9;

    svg {
      opacity: 1;
    }
  }

  &:active {
    opacity: 0.9;

    svg {
      opacity: 1;
    }
  }
`;
