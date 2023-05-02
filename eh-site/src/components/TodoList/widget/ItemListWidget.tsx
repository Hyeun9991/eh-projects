import React from 'react';
import styled from 'styled-components';
import { Item } from '../../../types/Item';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../../modules/index';
import { clearItem, deleteItem } from '../../../modules/itemReducer';
import { AiOutlineCheck } from 'react-icons/ai';

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
          <TodoItem key={data.itemId} className={data.clear ? 'complete' : ''}>
            <TodoHeader>
              <CompleteButton
                className={data.clear ? 'complete' : ''}
                onClick={() => clickComplete(data)}
              >
                <AiOutlineCheck
                  className={data.clear ? 'complete icon' : 'icon'}
                />
              </CompleteButton>
              <p className={data.clear ? 'complete' : ''}>{data.itemName}</p>
            </TodoHeader>
            <DeleteButton
              onClick={() => clickDelete(data)}
              className="delete-btn"
            ></DeleteButton>
          </TodoItem>
        );
      })}
    </Container>
  );
};

export default ItemList;

const Container = styled.ul`
  width: 100%;
  height: 90%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.inputColor};
    border-radius: 1.25rem;
    padding: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 1.25rem;
  }
`;
const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.75rem;
  height: 3rem;
  padding: 1rem;
  position: relative;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.textColor};
  }

  button {
    cursor: pointer;
  }

  &:hover {
    .delete-btn {
      opacity: 0.2;

      &:hover {
        opacity: 1;
      }
    }
  }

  &.complete {
  }
`;
const TodoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const CompleteButton = styled.div`
  background-color: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 0.15rem solid ${({ theme }) => theme.completeColor};
  transition: all 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .icon {
    color: ${({ theme }) => theme.backgroundColor};
    opacity: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.completeColor};

    .icon {
      opacity: 1;
    }
  }

  &.complete {
    background-color: ${({ theme }) => theme.completeColor};
    font-weight: normal;

    .icon {
      opacity: 1;
    }
  }
`;
const DeleteButton = styled.div`
  background-color: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 0.15rem solid ${({ theme }) => theme.deleteColor};
  transition: all 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  cursor: pointer;  

  &:hover {
    background-color: ${({ theme }) => theme.deleteColor};
  }
`;
