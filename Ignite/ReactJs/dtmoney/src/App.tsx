import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { Header } from "./components/Header/index";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Dashboard } from "./components/Dashboard";
import { TransactionsProvider } from "./hooks/useTransactions";
import { useState } from "react";

Modal.setAppElement("#root"); //necessário na documentação do modal de por causa de acessibilidade

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

//export default significa que não é necessária a desestruturação na importação do módulo necessário. Pode-se também importar com qualquer nome.
