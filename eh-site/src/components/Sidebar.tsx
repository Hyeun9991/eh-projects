import React from 'react';
import styled from 'styled-components';
import Switch from './Sidebar/Switch';
import Menu from './Sidebar/Menu';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: hotpink; */
  transition: all 0.25s;
`;

const Navbar = styled.div`
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
  border-left: 0.4rem solid ${({ theme }) => theme.textColor};
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

const LogoBox = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 25px;
  height: 25px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

interface Props {
  children: JSX.Element;
}

const Sidebar = ({ children }: Props) => {
  return (
    <Container>
      <Navbar>
        <LogoBox>
          <Link to="/">
            <img src={require('../images/logo.png')} alt="로고 이미지" />
          </Link>
        </LogoBox>
        <Menu />
        <Switch />
      </Navbar>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Sidebar;
