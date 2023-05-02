import React, { useState, useRef } from 'react';
import styled from 'styled-components';

interface Props {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

const InsertCityNameWidget = ({ setCityName }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [city, setCity] = useState('inchone');

  const changeCityName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const clickChangeCity = () => {
    setCityName(city);

    // setCity('');
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // e.nativeEvent.isComposing === false 인 경우만 실행되도록 변경
    // 2번 실행되지만 첫 번째 이벤트에서는 해당 코드가 실행되지 않는다.
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      clickChangeCity();
    }
  };

  return (
    <Container className="insert-widget">
      <InputCityName
        type="text"
        ref={inputRef}
        value={city}
        onChange={changeCityName}
        onKeyDown={handleKeyPress}
        placeholder="도시 입력"
      />
    </Container>
  );
};

export default InsertCityNameWidget;

const Container = styled.div`
  background-color: transparent;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  padding: 1rem;

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    padding: 0.5rem;
  }
`;
const InputCityName = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 2rem;
  transition: 0.25s all ease-in-out;
  outline: none;
  color: ${({ theme }) => theme.textColor};
  padding: 0.5rem;
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  opacity: 0.7;

  &::placeholder {
    color: ${({ theme }) => theme.textColor};
    opacity: 0.5;
  }
`;
