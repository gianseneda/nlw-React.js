import { useState } from "react";

export default function Button(props) {
  //props são as propriedades

  const [counter, setCounter] = useState(1); //retorna [estado, alterarEstado]

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <>
      <span>{counter}</span>
      <button onClick={increment}>{props.children}</button>
      <br />
    </>
  );
}
