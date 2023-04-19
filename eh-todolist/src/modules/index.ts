import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemReducer from './ItemReducer';

// [루트 리듀서 만들기]

// reducer에 persist store 정의
// localStorage에 저장하고 싶으면 import storage from 'redux-persist/lib/storage';
// session Storage에 저장하고 싶으면 import storageSession from 'redux-persist/lib/storage/session
const persistConfig = {
  key: 'todos',
  storage,
};

const rootReducer = combineReducers({
  itemReducer,
});

export default persistReducer(persistConfig, rootReducer);

// RootState 타입 만들기
// 스토어에서 관리하고 있는 상태를 조회하기 위해서 useSelector를 사용할 때 필요하다.
export type RootState = ReturnType<typeof rootReducer>;
