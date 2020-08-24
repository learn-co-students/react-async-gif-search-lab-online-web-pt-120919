import React from "react"

const GifList = (props) => {
    return(
        <div>
            <ul>
                {props.gifs.map(gif => {
                    return <li><img src={gif.url}></img></li>
                })}
            </ul>
        </div>
    )
 }

 export default GifList