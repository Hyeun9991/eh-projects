import Sidebar from '../Sidebar';
import WeatherWidget from '../Weather/widget/WeatherWidget';
import TodoListWidget from '../TodoList/widget/TodoListWidget';
import styled from 'styled-components';

const Home = () => {
  return (
    <Sidebar>
    <Container className="home">
      <WeatherWidget />
      <TodoListWidget />
    </Container>
    </Sidebar>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1080px;
  height: calc(100vh - 70px);
  margin: 0 auto;
  margin-top: 35px;
  gap: 1.5rem;

  /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 70px;
    width: 90%;
    gap: 0;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    flex-direction: column;
    width: 90%;
    margin-top: 100px;
    gap: 3rem;
  }
`;
