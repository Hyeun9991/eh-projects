import { WeatherData } from '../../../types/weather';
import styled from 'styled-components';

interface Props {
  weather: WeatherData | undefined;
}

const PrintWeatherWidget = ({ weather }: Props) => {
  const city = weather?.name;
  const temp = Math.round(Number(weather?.main.temp) - 273.15);
  const minTemp = Math.round(Number(weather?.main.temp_min) - 273.15);
  const maxTemp = Math.round(Number(weather?.main.temp_max) - 273.15);
  const weatherIcon = weather?.weather[0].icon;
  const weatherIconAdrs = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <Container>
      {/* <CityName className="city-name">{city}</CityName> */}
      <TempBox className="temp-box">
        <Temp className="temp">
          {temp}
          <span>°</span>
        </Temp>
        <SecondTempBox>
          <SecondTemp>
            {minTemp}
            <span>°</span>
          </SecondTemp>
          <SecondTemp>
            {maxTemp}
            <span>°</span>
          </SecondTemp>
        </SecondTempBox>
      </TempBox>
      <WeatherIcon
        src={weatherIconAdrs}
        alt="날씨 아이콘"
        className="weather-icon"
      />
    </Container>
  );
};

export default PrintWeatherWidget;

const Container = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
  }
`;
const TempBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Temp = styled.h2`
  font-size: 50px;
  margin: 0;
  margin-left: 0.75rem;
  display: flex;
  font-weight: 800;

  span {
    font-size: 32px;
  }
`;
const SecondTempBox = styled.div`
  display: flex;
  gap: 2rem;
`;
const SecondTemp = styled.p`
  font-weight: 600;
  font-size: 14px;
  opacity: 0.7;
  margin: 0;
`;
const WeatherIcon = styled.img`
  margin-bottom: 1rem;
  position: absolute;
  top: -3rem;
  right: 1rem;
`;
