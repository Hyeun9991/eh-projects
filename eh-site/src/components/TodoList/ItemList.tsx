import React from 'react';
import styled from 'styled-components';
import { Item } from '../../types/Item';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../modules/index';
import { clearItem, deleteItem } from '../../modules/itemReducer';

const Container = styled.div`
  width: 100%;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.textColor};

    &.complete {
      color: ${({ theme }) => theme.secondary};
      text-decoration: line-through;
    }
  }

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.secondary};
    border: none;
    font-size: 12px;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      color: ${({ theme }) => theme.textColor};
    }

    &:focus {
      font-weight: normal;
    }

    &.complete {
      color: ${({ theme }) => theme.textColor};
      font-weight: normal;
    }
  }
`;

const TodoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ItemList = () => {
  const todos = useSelector((state: RootState) => state.itemReducer.todo);
  const dispatch = useDispatch();

  const clickDelete = (data: Item) => {
    dispatch(deleteItem(data.itemId));
  };
  const clickComplete = (data: Item) => {
    dispatch(clearItem(data.itemId));
  };

  return (
    <Container>
      {todos.map((data: Item) => {
        return (
          <TodoItem key={data.itemId}>
            <TodoHeader>
              <button
                className={data.clear ? 'complete' : ''}
                onClick={() => clickComplete(data)}
              >
                완료
              </button>
              <p className={data.clear ? 'complete' : ''}>{data.itemName}</p>
            </TodoHeader>
            <button onClick={() => clickDelete(data)}>삭제</button>
          </TodoItem>
        );
      })}
    </Container>
  );
};

export default ItemList;
