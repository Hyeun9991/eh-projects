import { useThemeContext } from '../../context/themeContext';
import styled from 'styled-components';
import { CgDarkMode } from 'react-icons/cg';

const Switch = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <ToggleButton onClick={toggleTheme}>
      <CgDarkMode />
    </ToggleButton>
  );
};

export default Switch;

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
