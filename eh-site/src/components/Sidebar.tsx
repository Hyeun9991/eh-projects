import styled from 'styled-components';
import Switch from './Sidebar/Switch';
import Menu from './Sidebar/Menu';
import Profile from './Sidebar/Profile';

interface Props {
  children: JSX.Element;
}

const Sidebar = ({ children }: Props) => {
  return (
    <Container>
      <ContainerWrapper>
        <Navbar>
          <Profile />
          <Menu />
          <Switch />
        </Navbar>
        <ContentContainer>{children}</ContentContainer>
      </ContainerWrapper>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    padding-top: 5%;
    height: auto;
  }
`;
const ContainerWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  width: 90%;
  height: 90%;
  border-radius: 1.25rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    width: 95%;
    /* height: 95%; */
    height: auto;
  }
`;
const Navbar = styled.nav`
  background-color: transparent;
  width: 23%;
  height: 100%;
  padding: 2rem;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    width: 100%;
    height: 50px;
    flex-direction: row;

    .user-name {
      display: none;
    }
    .menu-container {
      display: none;
    }
    .menu-title {
      display: none;
    }
    .menu-item {
      padding: 0;
    }
  }
`;
const ContentContainer = styled.div`
  width: 77%;
  height: 100%;
  margin-left: 23%;

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-top: 50px;
  }
`;
