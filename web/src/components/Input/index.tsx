import React, { useCallback, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  updateFilter(filter: string): void;
}

const Input: React.FC<InputProps> = ({ updateFilter, ...rest }) => {
  const handleInputChange = useCallback(
    (filter: string) => {
      updateFilter(filter);
    },
    [updateFilter],
  );

  return (
    <Container
      {...rest}
      placeholder="Search movies..."
      onChange={(e) => handleInputChange(e.target.value)}
    />
  );
};

export default Input;
