import React from 'react';
import { Container, Content, CardContainer } from './styles';

import Empty from '../../components/Empty';
import Input from '../../components/Input';
import Card from '../../components/Card';

import logoImg from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <Input />
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>

        <Empty />
      </Content>
    </Container>
  );
};

export default Home;
