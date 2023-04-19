import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { BsPlus } from 'react-icons/bs';
import { addItem } from '../../modules/itemReducer';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.secondary};
  width: 85%;
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

const AddButton = styled.button`
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
    font-size: 25px;
    color: ${({ theme }) => theme.primary};
  }
`;

const InsertItem = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const [itemName, setItemName] = useState('');

  const changeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const clickButton = () => {
    const itemData = {
      id: uuid(),
      name: itemName,
      clear: false,
    };
    dispatch(addItem(itemData.id, itemData.name, itemData.clear));

    setItemName('');
    inputRef.current?.focus();
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="메모를 시작하세요."
        value={itemName}
        onChange={changeItemName}
        ref={inputRef}
      />
      <AddButton onClick={clickButton}>
        <BsPlus className="icon" />
      </AddButton>
    </Container>
  );
};

export default InsertItem;
