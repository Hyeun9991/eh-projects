import React from 'react';
import Sidebar from '../Sidebar';
import styled from 'styled-components';
import InsertItem from './InsertItem';
import ItemList from './ItemList';

const Container = styled.div`
  background-color: transparent;
  width: 500px;
  margin-bottom: 7%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    width: 80%;
  }
`;

const ProjectTitle = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-size: 24px;
`;

const TodoList = () => {
  return (
    <Sidebar>
      <Container>
        <ProjectTitle>Todo List</ProjectTitle>
        <InsertItem />
        <ItemList />
      </Container>
    </Sidebar>
  );
};

export default TodoList;
