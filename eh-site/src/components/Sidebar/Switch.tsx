import React from 'react';
import { useThemeContext } from '../../context/themeContext';
import styled from 'styled-components';
import { CgDarkMode } from 'react-icons/cg';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
`;

const Switch = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Container>
      <ToggleButton onClick={toggleTheme}>
        <CgDarkMode />
      </ToggleButton>
    </Container>
  );
};

export default Switch;
