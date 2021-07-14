import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";

export function App() {
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
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

//export default significa que não é necessária a desestruturação na importação do módulo necessário. Pode-se também importar com qualquer nome.
