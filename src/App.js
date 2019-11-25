import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
