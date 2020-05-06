import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Header = styled.div`
  display: flex;
  height: 12vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10vw;
  margin-top: 5vh;

  > img {
    width: 40px;
    height: 40px;
  }

  svg {
    margin-top: 20px;
    color: #7a8c99;
  }
`;

export const Content = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    margin-top: 12px;
    color: #7a8c99;
  }

  h1 {
    font-size: 70px;
  }
`;

export const PictureContainer = styled.section`
  padding: 15vh 9vw;

  img {
    border-radius: 8px;
    box-shadow: 0 4px 30px 0 rgba(5, 10, 13, 0.6);
    width: 240px;
    height: 350px;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Rating = styled.div`
  padding: 12px;
  display: flex;
  margin: 8px 0 0 8px;
  padding: 0;
  background: #0a1014;
  border: 1px solid #353f4c;
  border-radius: 4px;
  width: 110px;
  height: 40px;
  justify-content: space-between;
  align-items: center;

  img {
    padding: 4px;
    flex: 1;
    width: 50%;
    height: 100%;
    background-color: #ff9f1c;
    border-radius: 4px 0 0 4px;
  }

  span {
    color: #ffffff;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.17px;
    line-height: 20px;
    text-align: center;
    padding: 4px;
    margin: 2px;
    width: 50%;
  }
`;

export const RottenRating = styled.div`
  padding: 12px;
  display: flex;
  margin: 8px 0 0 8px;
  padding: 0;
  background: #0a1014;
  border: 1px solid #353f4c;
  border-radius: 4px;
  width: 80px;
  height: 40px;
  justify-content: space-between;
  align-items: center;

  img {
    padding: 4px;
    flex: 1;
    width: 50%;
    height: 100%;
    background-color: #ff4040;
    border-radius: 4px 0 0 4px;
  }

  span {
    color: #ffffff;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.17px;
    line-height: 20px;
    text-align: center;
    padding: 4px;
    width: 50%;
    margin: 2px;
  }
`;

export const FavoriteButton = styled.button`
  display: flex;
  margin: 8px 0 0 8px;
  background: #0a1014;
  border: 1px solid #353f4c;
  border-radius: 4px;
  width: 182px;
  height: 40px;
  justify-content: flex-start;
  align-items: center;

  svg {
    width: 20%;
    margin-left: 15px;
  }

  span {
    color: #7a8c99;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    padding: 4px;
    margin: 2px;
  }
`;
