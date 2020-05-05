import React, { ButtonHTMLAttributes } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...rest }) => (
  <Container isLoading={isLoading} {...rest}>
    {isLoading ? <FaSpinner /> : children}
  </Container>
);

export default Button;
