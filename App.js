import React from 'react';
import Home from './pages/Home';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = (navigation , route) => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;