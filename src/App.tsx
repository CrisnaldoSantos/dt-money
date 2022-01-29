import { Dashboard } from 'components/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from 'components/NewTransactionModal';
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
    <>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={() => handleCloseNewTransactionModal()}
      />
      <Header
        onOpenNewTransactionModal={() => handleOpenNewTransactionModal()}
      />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
