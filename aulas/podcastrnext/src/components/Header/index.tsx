import styles from "./styles.module.scss";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir sempre</p>
      <span>{currentDate}</span>
      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        <img src={theme === "light" ? "/sun.svg" : "/moon.svg"} />
      </button>
    </header>
  );
}
