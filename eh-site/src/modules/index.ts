import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemReducer from './itemReducer';

const persistConfig = {
  key: 'todos',
  storage,
};

const rootReducer = combineReducers({
  itemReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
