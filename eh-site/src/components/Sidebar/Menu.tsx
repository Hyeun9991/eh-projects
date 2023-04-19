import React from 'react';
import MenuItem from './MenuItem';
import styled from 'styled-components';

const Container = styled.div`
  ul {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const menuList = [
  { menuName: 'Home', path: '/' },
  { menuName: 'Calendar', path: '/calender' },
  { menuName: 'Todo List', path: '/todo' },
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
