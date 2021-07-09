import { useState } from "react";

//tudo que começa com use é um hook

//imutabilidade - as variáveis não podem ser diretamente alteradas. Para isso, é necessário criar uma nova variável, copiando as informaçÕes com o spread ... e add a nova info: novoUsuarios = [...velhoUsuarios, 'novapessoa']

export function Counter() {
  const [counter, setCounter] = useState(0); //useState sempre retorna um objeto com 2 propriedades

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment +1
      </button>
    </div>
  );
}

//por padrão o react não monitora mudanças de variáveis. Por isso devemos usar os Estados para que o React saiba que é necessária uma mudança ali, como se fosse um watch, para renderizar.
