import styles from "./styles/App.module.scss";
import { MessageList } from "./components/MessageList";
import { SendMessageForm } from "./components/SendMessageForm";
import { LoginBox } from "./components/LoginBox";
import { AuthContext } from "./context/auth";
import { useContext } from "react";

export function App() {
  const { user } = useContext(AuthContext);
  return (
    <main
      className={`${styles.contentWrapper} ${
        !!user ? styles.contentSigned : ""
      }`}
    >
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
