import React from 'react';
import styled from 'styled-components';
import Switch from './Sidebar/Switch';
import Menu from './Sidebar/Menu';
import { Link } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const Sidebar = ({ children }: Props) => {
  return (
    <Container>
      <Navbar>
        <LogoBox>
          <Link to="/" className="logo-font">
            Eh
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

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Navbar = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-top: 0.4rem solid ${({ theme }) => theme.textColor};
  width: 100%;
  height: 70px;
  padding: 0rem 1.5rem;
  transition: all 0.25s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;

  /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    height: 55px;
    padding: 1rem 0rem;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoBox = styled.div`
  width: 32px;
  height: 32px;

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
