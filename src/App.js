import React, { useState, useEffect } from 'react';
import Player from './Components/Player/Player';
import './App.css';

function App() {

  // Chúng ta sẽ không cần setSongs bởi vì danh sách những bài hát này là cố định không thay đổi
  const [songs] = useState([
    {
      title: "Song 1",
      artist: "Artist 1",
      img_src: "./images/song-1.jpg",
      music_src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      music_src: "./music/somebody-new.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      music_src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      music_src: "./music/somebody-new.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1){
        return 0;
      }
      else{
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
              songs={songs} 
              currentSongIndex={currentSongIndex} 
              setCurrentSongIndex={setCurrentSongIndex} 
              nextSongIndex={nextSongIndex}/>
    </div>
  );
}

export default App;
