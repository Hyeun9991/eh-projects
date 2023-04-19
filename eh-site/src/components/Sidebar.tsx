import React from 'react';
import styled from 'styled-components';
import Switch from './Sidebar/Switch';
import Menu from './Sidebar/Menu';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Navbar = styled.div`
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
  border-right: 0.2rem solid ${({ theme }) => theme.textColor};
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

interface Props {
  children: JSX.Element;
}

const Sidebar = ({ children }: Props) => {
  return (
    <Container>
      <Navbar>
        <Menu />
        <Switch />
      </Navbar>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Sidebar;
