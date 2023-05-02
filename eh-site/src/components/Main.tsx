import React from 'react';
import Sidebar from './Sidebar';
import TodoListWidget from './TodoList/widget/TodoListWidget';
import WeatherWidget from './Weather/widget/WeatherWidget';
import styled from 'styled-components';

const Main = () => {
  return (
    <Sidebar>
      <Container>
        <WeatherWidget />
        <TodoListWidget />
      </Container>
    </Sidebar>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;
