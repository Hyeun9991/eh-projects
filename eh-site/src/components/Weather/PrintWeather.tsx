import { WeatherData } from '../../types/weather';
import styled from 'styled-components';

interface Props {
  weather: WeatherData | undefined;
}

const PrintWeather = ({ weather }: Props) => {
  const city = weather?.name;
  const DetailWeather = weather?.weather[0].description;
  const temp = Math.round(Number(weather?.main.temp) - 273.15);

  return (
    <Container>
      <Temp>
        {temp}
        <span>°C</span>
      </Temp>
      <WeatherAndCity>
        <CityName>{city}</CityName>
        <WeatherName>{DetailWeather}</WeatherName>
      </WeatherAndCity>
    </Container>
  );
};

export default PrintWeather;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  /* margin-bottom: 7%; */
`;
const WeatherAndCity = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Temp = styled.h2`
  font-size: 64px;
  display: flex;
  gap: 0.5rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 1rem;
  margin-left: 1.5rem;

  span {
    font-size: 14px;
    opacity: 0.7;
  }
`;
const CityName = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;
const WeatherName = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 0;
`;
