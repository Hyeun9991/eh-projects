import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './context/themeContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './modules/index';
import { persistStore } from 'redux-persist';

const store = createStore(rootReducer);

export const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeContextProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeContextProvider>
);
