import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}; //recebe as propriedades HTML nativas de um botão AND &&& as propriedades deste objeto

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button className={`button ${isOutlined ? "outlined" : ""}`} {...props} /> //distribui qualquer propriedade como parâmetro ai dentro como atributos
  );
}

//named export
