import React from 'react';
import styled from 'styled-components';
import InsertItemWidget from './InsertItemWidget';
import ItemListWidget from './ItemListWidget';

const TodoListWidget = () => {
  return (
    <Container>
      <InsertItemWidget />
      <ItemListWidget />
    </Container>
  );
};

export default TodoListWidget;

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1.25rem;
  padding: 1rem;

  /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    height: auto;
    padding: 0.5rem;
  }
`;
