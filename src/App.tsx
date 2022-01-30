/* eslint-disable react/jsx-no-constructed-context-values */
import { Dashboard } from 'components/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from 'components/NewTransactionModal';
import { TransactionsContext } from 'contexts/TransactionsContext';
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
    <TransactionsContext.Provider value={[]}>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={() => handleCloseNewTransactionModal()}
      />
      <Header
        onOpenNewTransactionModal={() => handleOpenNewTransactionModal()}
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

export default App;
