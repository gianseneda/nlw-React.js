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

import { GetStaticProps } from 'next' //incluo tipagem nesta funcao
import Image from 'next/image' //para imagens pesadas pois ele formata
import Link from 'next/link'
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';
import styles from './home.module.scss'
import { useContext } from 'react';
import { PlayerContext } from '../Contexts/PlayerContext'

type Episode = {
  id: string;
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  description: string;
  durationAsString: string;
  url: string;
  publishedAt: string;
}

type HomeProps ={ //tipando o PROPS
  latestEpisodes: Array<Episode>
  allEpisodes: Array<Episode>
}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  const { play } = useContext(PlayerContext)
  return (
    <div className={styles.homepage}>
      <section className={styles.latestEpisodes}>
        <h2>Últimos Lançamentos</h2>
        <ul>
        {latestEpisodes.map(episode => {
          return( //esse key é necessário para que a primeira li de retorno fique melhor performática
            <li key={episode.id}>
              <Image width={192} height={192} src={episode.thumbnail} alt={episode.title} objectFit='cover' />

              <div className={styles.episodeDetails}>
                <Link href={`/episodes/${episode.id}`}>
                <a>{episode.title}</a>
                </Link>
                <p>{episode.members}</p>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
              </div>
              <button type="button" onClick={()=>play(episode)}>
                <img src='/play-green.svg' alt="Tocar episódio" />
              </button>
            </li>
          )
        })}
        </ul>
      </section>
      <section className={styles.allEpisodes}>
      <h2>Todos episódios</h2>
      <table cellSpacing={0}>
        <thead>
          <tr>
          <th></th>
          <th>Podcast</th>
          <th>Integrantes</th>
          <th>Data</th>
          <th>Duração</th>
          <th></th>
          </tr>
        </thead>
        <tbody>
          {allEpisodes.map(episode=>{
            return(
              <tr key={episode.id}>
                <td style={{width:72}}>
                  <Image 
                  width={120}
                  height={120}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                  />
                </td>
                <td>
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                </td>
                <td>{episode.members}</td>
                <td style={{width:100}}>{episode.publishedAt}</td>
                <td>{episode.durationAsString}</td>
                <td>
                  <button type="button">
                    <img src="/play-green.svg" alt="Tocar episódio"/>
                  </button>
                </td>

              </tr>
            )
          })}
        </tbody>
      </table>
      </section>
    </div>
  )
}

export  const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12, 
      _sort: 'published_at',
      _order: 'desc'
    }
  }) //passando parâmetros de limite, sortidos por publicação e ordem decrescente
  
 const episodes = data.map(episode => { //formatando os dados já que carregamos a api
   return{
     id: episode.id,
     title: episode.title,
     thumbnail: episode.thumbnail,
     members: episode.members,
     publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
     duration: Number(episode.file.duration),
     durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
     description: episode.description,
     url: episode.file.url,
   }
 })

 const latestEpisodes = episodes.slice(0,2) //2 primeiros episodios
 const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: { //props precisa sempre ser esse nome
      latestEpisodes,
      allEpisodes, //aqui pode mudar
    },
    revalidate: 60*60*8, //a cada 8 horas ele gera uma nova chamada da página
  }
}
