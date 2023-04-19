import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './modules/index';

// [프로젝트에 리덕스 적용]

const store = createStore(rootReducer);

// save localStorage
export const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
