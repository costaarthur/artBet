import React from 'react';
// provider serve para toda aplicação ter acesso ao estado global, que é o store
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './styles/global';

import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
