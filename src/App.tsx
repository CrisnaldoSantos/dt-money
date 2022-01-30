/* eslint-disable react/jsx-no-constructed-context-values */
import { Dashboard } from 'components/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from 'components/NewTransactionModal';
import {  TransactionsProvider } from 'contexts/TransactionsContext';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={() => handleCloseNewTransactionModal()}
      />
      <Header
        onOpenNewTransactionModal={() => handleOpenNewTransactionModal()}
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
