import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  height: 220px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 4px 30px 0 rgba(5, 10, 13, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    flex: 1;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #212932;
  opacity: 0;

  p {
    position: absolute;
    left: 5px;
    bottom: 30px;
    font-size: 20px;
    text-align: left;
    text-justify: auto;
    max-width: 120px;
    line-height: 24px;
    letter-spacing: 0.22px;
    color: #fff;
  }

  span {
    font-size: 16px;
    position: absolute;
    left: 5px;
    bottom: 5px;
    font-size: 16px;
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
    opacity: 0.8;

    svg {
      opacity: 1;
    }
  }
`;
