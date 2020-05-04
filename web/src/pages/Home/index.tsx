import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container, Content } from './styles';

import Empty from '../../components/Empty';
import Input from '../../components/Input';
import logoImg from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <Input />
        <Empty />
      </Content>
    </Container>
  );
};

export default Home;
