import MenuItem from './MenuItem';
import styled from 'styled-components';

const menuList = [{ menuName: 'Home', path: '/' }];

const Menu = () => {
  return (
    <Container className="menu-container">
      <Title className="menu-title">Lists</Title>
      {menuList.map((data) => {
        return (
          <MenuItem
            key={data.menuName}
            path={data.path}
            menuName={data.menuName}
          />
        );
      })}
    </Container>
  );
};

export default Menu;

const Container = styled.ul`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;
const Title = styled.h1`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 1rem;
`;
