import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss'

type ButtonProps= ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps){
  return(
    <button className="button" {...props}/> //distribui qualquer propriedade como parâmetro ai dentro como atributos
  )
}

//named export