import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <h1>DTMoney</h1>
      <GlobalStyle />
    </div>
  );
}

//export default significa que não é necessária a desestruturação na importação do módulo necessário. Pode-se também importar com qualquer nome.
