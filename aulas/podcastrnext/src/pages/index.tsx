/* SPA  useEffect(()=> {
    fetch('http://localhost:3333/episodes').then(response => response.json()).then(data => console.log(data))
  }, []) - depende do JS para ser carregado o conteudo, GOOGLE nao encontra o conteúdo */
/* SSR */ /* export async function getServerSideProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  
  return {
    props: { //props precisa sempre ser esse nome
      episodes: data //aqui pode mudar
    }
  }
} */
// SSG - o que eu fiz aqui embaixo

import { useEffect } from "react";

export default function Home(props) {
  return (
    <div>
    <h1>Index</h1>
    <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}

export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  
  return {
    props: { //props precisa sempre ser esse nome
      episodes: data //aqui pode mudar
    },
    revalidate: 60*60*8, //a cada 8 horas ele gera uma nova chamada da página
  }
}
