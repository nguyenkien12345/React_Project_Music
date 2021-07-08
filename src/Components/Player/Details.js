import React from 'react'

function Details({song}) {
    return (
        <div>
            <div className='c-player--details'>
                <div className='details-img'>
                    <img src={song.img_src} alt={song.title}/>
                </div>
                <h3 className='details-title'>{song.title}</h3>
                <h4 className='details-artist'>{song.artist}</h4>
            </div>
        </div>
    )
}

export default Details
