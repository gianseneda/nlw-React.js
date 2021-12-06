import styles from "./styles.module.scss";
import { VscGithubInverted } from "react-icons/vsc";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGitHub}>
        <VscGithubInverted size="24" />
        Entrar com GitHub
      </a>
    </div>
  );
}
