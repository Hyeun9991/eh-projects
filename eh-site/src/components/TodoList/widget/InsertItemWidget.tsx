import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { addItem } from '../../../modules/itemReducer';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    /**
     * 한 글 입력시 2번 찍히는 에러 - isComposing 반환값을 이용해서 해결
     * 빈 문자열은 enter 클릭 후 "" 로 초기화했기 때문
     *
     * 원인: IME(input method editor) 문제
     * onKeyDown, onKeyUp 이벤트에 한글 뿐만 아니라, 일본어, 중국어 등에서 발생하는 문제
     *
     * IME 과정에서 keydown 이벤트가 발생하면, OS와 브라우저에서 해당 이벤트를 모두 처리하기 때문에
     * keydown 이벤트가 중복으로 발생하게 되는 것이다.
     *
     * isComposing을 콘솔로 확인하면 첫 번째는 true, 두 번째는 false로 찍힘
     * 첫 번째는 조합중일때, 두 번째는 조합이 끝난 후 실헹됨.
     *
     * 이벤트가 두 번 실행되는 것은 제어할 수 없지만,
     * isComposing의 값에 따라 실행할 동작을 1번만 수행하도록 조건을 걸어주면 해결된다.
     */

    // e.nativeEvent.isComposing === false 인 경우만 실행되도록 변경
    // 2번 실행되지만 첫 번째 이벤트에서는 해당 코드가 실행되지 않는다.
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      clickButton();
    }
  };

  return (
    <Container>
      <InputTodoText
        type="text"
        placeholder="메모를 시작하세요."
        value={itemName}
        onChange={changeItemName}
        onKeyDown={handleKeyPress}
        ref={inputRef}
      />
    </Container>
  );
};

export default InsertItem;

const Container = styled.div`
  padding: 0.5rem;
  width: 100%;
`;
const InputTodoText = styled.input`
  background-color: ${({ theme }) => theme.inputColor};
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  transition: 0.25s all ease-in-out;
  outline: none;
  color: ${({ theme }) => theme.textColor};

  &::placeholder {
    color: ${({ theme }) => theme.textColor};
    opacity: 0.5;
  }
`;
