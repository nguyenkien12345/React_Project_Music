import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Controls({isPlaying, setIsPlaying, SkipSong}) {
    return (
        <div className='c-player--controls'>
            <button className='skip-btn'>
                <FontAwesomeIcon icon={faBackward} onClick={() => SkipSong(false)}/>
            </button>
            <button className='play-btn'>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={() => setIsPlaying(!isPlaying)}/>
            </button>
            <button className='skip-btn'>
                <FontAwesomeIcon icon={faForward} onClick={() => SkipSong(true)}/>
            </button>
        </div>
    )
}

export default Controls
