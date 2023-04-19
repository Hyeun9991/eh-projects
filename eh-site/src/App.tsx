import React from 'react';
import { useThemeContext } from './context/themeContext';
import { darkTheme, lightTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Calender from './components/Calender/Calender';
import TodoList from './components/TodoList/TodoList';
import Calculator from './components/Calculator/Calculator';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// npm install styled-components
// npm install @types/styled-components
