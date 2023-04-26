import React from 'react';
import MenuItem from './MenuItem';
import styled from 'styled-components';

const Container = styled.div`
  ul {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    ul {
      gap: 1rem;
    }
  }
`;

const menuList = [
  { menuName: 'Home', path: '/' },
  { menuName: 'Weather', path: '/weather' },
  { menuName: 'Todo List', path: '/todo' },
  { menuName: 'Calendar', path: '/calender' },
  { menuName: 'Calculator', path: '/calculator' },
];

const Menu = () => {
  return (
    <Container>
      <ul>
        {menuList.map((data) => {
          return (
            <MenuItem
              key={data.menuName}
              path={data.path}
              menuName={data.menuName}
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default Menu;
