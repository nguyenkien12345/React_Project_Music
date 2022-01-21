import React, { useEffect, useRef, useState } from 'react';
import Controls from './Controls';
import Details from './Details';

function Player({songs, currentSongIndex, setCurrentSongIndex, nextSongIndex}) {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const SkipSong = (forward = true) => {
        if(forward){
           setCurrentSongIndex(() => {
            let temp = currentSongIndex;
            temp++
            if(temp > songs.length - 1){
                temp = 0;
            }
            return temp;
        });
        }
        else{
            setCurrentSongIndex(() => {
             let temp = currentSongIndex;
             temp--;
             if(temp < 0){
                temp = songs.length - 1;
            }
            return temp;
            })
        }
    }

    useEffect(() => {
        if(isPlaying){
            audioRef.current.play();
        }
        else{
            audioRef.current.pause();
        }
    })

    return (
        <div className='c-player'>
            <audio ref={audioRef} src={songs[currentSongIndex].music_src}></audio>
            <h4>Playing now</h4>
            <Details 
                song={songs[currentSongIndex]}
            />
            <Controls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                SkipSong={SkipSong}
            />
            <p><strong>Next up: </strong> {songs[nextSongIndex].title} by {songs[nextSongIndex].artist} </p>
        </div>
    )

}

export default Player
