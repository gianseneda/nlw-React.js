import { createContext } from 'react';

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
  play: (episode: Episode) => void
  setPlayingState: (state: boolean) => void
  togglePlay: () => void
}

export const PlayerContext = createContext({} as  PlayerContextData); //nao é necessário colocar nada de importante aqui, mas neste caso estou colocando o formato que ele vai receber