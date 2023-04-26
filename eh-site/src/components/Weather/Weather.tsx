import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import { WeatherData } from '../../types/weather';
import axios from 'axios';
import styled from 'styled-components';
import InsertCityName from './InsertCityName';
import PrintWeather from './PrintWeather';

const api = {
  url: process.env.REACT_APP_API_URL,
  api_key: process.env.REACT_APP_WEATHER_API_KEY,
};

const Weather = () => {
  const [cityName, setCityName] = useState('incheon');
  const [weather, setWeather] = useState<WeatherData>();
  const [weatherName, setWeatherName] = useState('');

  // https://www.youtube.com/watch?v=snPj_1UEUls&list=PL8phz-YrtMLx9F3zG1oWJxE8Y30V4lgiI&index=4
  // 달력 만들기

  const getWeather = async () => {
    const response = await axios.get(
      `${api.url}weather?q=${cityName}&appid=${api.api_key}`
    );

    setWeather(response.data);
    setWeatherName(response.data.weather[0].main);
  };

  useEffect(() => {
    getWeather();
  }, [cityName]);

  return (
    <Sidebar>
      <Container>
        <ProjectTitle>{`Weather`}</ProjectTitle>
        <Box>
          <PrintWeather weather={weather} />
          <InsertCityName setCityName={setCityName} />
        </Box>
      </Container>
    </Sidebar>
  );
};

export default Weather;

const Container = styled.div`
  background-color: transparent;
  width: 500px;
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
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const ProjectTitle = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-size: 24px;
`;
