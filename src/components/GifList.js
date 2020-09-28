import React from 'react'

function GifList(props) {
    return(
    <div>
        <ul>
        {props.gifs.map(gif => {
            return <li><img src={gif.url}alt="img"></img></li>
        })}
        </ul>
    </div>
    )
}

export default GifList