import { useThemeContext } from './context/themeContext';
import { darkTheme, lightTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
