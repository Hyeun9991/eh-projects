import { useEffect, useState } from 'react';
import { WeatherData } from '../../../types/weather';
import axios from 'axios';
import styled from 'styled-components';
import PrintWeatherWidget from './PrintWeatherWidget';
import InsertCityNameWidget from './InsertCityNameWidget';

const api = {
  url: process.env.REACT_APP_API_URL,
  api_key: process.env.REACT_APP_WEATHER_API_KEY,
};

const WeatherWidget = () => {
  const [cityName, setCityName] = useState('incheon');
  const [weather, setWeather] = useState<WeatherData>();
  const [weatherName, setWeatherName] = useState('');

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
    <Container>
      <InsertCityNameWidget setCityName={setCityName} />
      <PrintWeatherWidget weather={weather} />
    </Container>
  );
};

export default WeatherWidget;

const Container = styled.div`
  background-color: ${({ theme }) => theme.weatherColor};
  border-radius: 1.25rem;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    height: 180px;
  }
`;
