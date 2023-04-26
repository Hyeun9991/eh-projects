import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

interface Props {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

const InsertCityName = ({ setCityName }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [city, setCity] = useState('');

  const changeCityName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const clickChangeCity = () => {
    setCityName(city);

    setCity('');
    inputRef.current?.focus();
  };

  return (
    <Container>
      <InputCityName
        type="text"
        ref={inputRef}
        onChange={changeCityName}
        value={city}
        placeholder='도시 입력'
      />
      <SearchButton onClick={clickChangeCity}>
        <FiSearch className="icon" />
      </SearchButton>
    </Container>
  );
};

export default InsertCityName;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputCityName = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.secondary};
  width: 87%;
  height: 2rem;
  transition: 0.25s all;
  outline: none;
  color: ${({ theme }) => theme.textColor};

  &::placeholder {
    font-weight: 300;
  }
  &:focus {
    border-bottom: 0.1rem solid ${({ theme }) => theme.textColor};
  }
`;
const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.textColor};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .icon {
    font-size: 14px;
    color: ${({ theme }) => theme.primary};
  }
`;
