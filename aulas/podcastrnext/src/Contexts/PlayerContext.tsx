import { createContext, useState, ReactNode, useContext } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

type PlayerContextData = {
  episodeList : Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  play: (episode: Episode) => void;
  playNext: () => void;
  playPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  setPlayingState: (state: boolean) => void;
  togglePlay: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  clearPlayerState: () => void;
  playList: (list: Episode[], index: number) => void;
}

export const PlayerContext = createContext({} as  PlayerContextData); //nao é necessário colocar nada de importante aqui, mas neste caso estou colocando o formato que ele vai receber

type PlayerContextProviderProps={
  children: ReactNode; // pode receber qualquer TAG JSX
}

export function PlayerContextProvider({children} : PlayerContextProviderProps){
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)

  function play(episode: Episode){
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true)
  }

  function playList(list: Episode[], index: number){
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true)

  }

  function togglePlay(){
    setIsPlaying(!isPlaying)
  }

  function toggleShuffle(){
    setIsShuffling(!isShuffling)
  }

  function toggleLoop(){
    setIsLooping(!isLooping)
  }

  function setPlayingState(state: boolean){
    setIsPlaying(state)
  }

  const hasPrevious = currentEpisodeIndex > 0;
  const hasNext =  isShuffling || (currentEpisodeIndex + 1) < episodeList.length

  function playNext(){
    if(isShuffling){
      const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length)
      setCurrentEpisodeIndex(nextRandomEpisodeIndex)
    } else if(hasNext){
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  function playPrevious(){
    if(hasPrevious){
      setCurrentEpisodeIndex(currentEpisodeIndex -1)
    }
  }

  function clearPlayerState(){
    setEpisodeList([])
    setCurrentEpisodeIndex(0)
  }

  return(
    <PlayerContext.Provider 
    value={{ 
      episodeList, 
      currentEpisodeIndex, 
      play, 
      isPlaying, 
      togglePlay,
      isShuffling,
      toggleLoop,
      toggleShuffle,
      isLooping,
      playNext,
      playPrevious,
      playList, 
      hasNext,
      hasPrevious,
      clearPlayerState,
      setPlayingState}}>
      {children}
    </PlayerContext.Provider>
  ) //o children serve para preparar o contexto a receber um conteúdo dentro dele, no caso, a div que está no APP
}

export const usePlayer = () => {
  return useContext(PlayerContext)
}