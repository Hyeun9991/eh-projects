import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, 
  *::after, 
  *::before {
    box-sizing: border-box
  }
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    padding: 0;
    transition: all 0.25 line-break;
    font-family: 'Noto Sans KR', sans-serif;
  }

  .logo-font {
    
  }
`;
