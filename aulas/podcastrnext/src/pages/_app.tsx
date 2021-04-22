import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContext } from '../Contexts/PlayerContext'; //com isso, todos os componentes que estão envoltos pelo PlayerContext terão acesso ao contexto que eu passar
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList]= useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  function play(episode){
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true)
  }

  function togglePlay(){
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state:boolean){
    setIsPlaying(state)
  }

  return (
    <PlayerContext.Provider value={{episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState}}>
      <div className={styles.wrapper}>
        <main>
        <Header></Header>
        <Component {...pageProps} />;
        </main>
        <Player></Player>
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp;
