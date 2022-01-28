import { Dashboard } from 'components/Dashboard';
import React from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
