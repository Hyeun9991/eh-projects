import { Item } from '../types/type';

// [모듈 작성]

// 1. 액션 type 선언
// type: Redux Action안에 들어갈 type
// as const: TypeScript 타입이 실제값을 가르키게 된다.
const ADD = 'itemReducer/ADD' as const;
const DELETE = 'itemReducer/DELETE' as const;
const CLEAR = 'itemReducer/CLEAR' as const;

// 2. 액션 생성 함수 선언
export const addItem = (id: string, name: string, clear: boolean) => ({
  type: ADD,
  payload: { id, name, clear },
});
export const deleteItem = (id: string) => ({
  type: DELETE,
  payload: id,
});
export const clearItem = (id: string) => ({
  type: CLEAR,
  payload: id,
});

// 3. 액션 객체들에 대한 type 준비
// type: TypeScript의 타입
// ReturnType: 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입
type TodoAction =
  | ReturnType<typeof addItem>
  | ReturnType<typeof deleteItem>
  | ReturnType<typeof clearItem>;

// 4. 상태의 타입과 상태의 초깃값 선언
type TodoState = {
  todo: Item[];
};

const initialTodo = {
  todo: [],
};

// 5. 리듀서 작성
const itemReducer = (
  state: TodoState = initialTodo,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case ADD:
      return {
        todo: state.todo.concat({
          itemId: action.payload.id,
          itemName: action.payload.name,
          clear: action.payload.clear,
        }),
      };
    case DELETE:
      return {
        todo: state.todo.filter((todo) => {
          return todo.itemId === action.payload ? false : true;
        }),
      };
    case CLEAR:
      return {
        todo: state.todo.map((todo) => {
          return todo.itemId === action.payload
            ? { ...todo, clear: !todo.clear }
            : todo;
        }),
      };

    default:
      return state;
  }
};

export default itemReducer;
