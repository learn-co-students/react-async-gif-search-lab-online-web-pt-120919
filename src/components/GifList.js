import React from "react"

const GifList = (props) => {
    return(
        <div>
            <ul>
                {props.gifs.forEach(gif => {
                    <li><img src={`"${gif.url}"`}></img></li>
                })}
            </ul>
        </div>
    )
 }

 export default GifList