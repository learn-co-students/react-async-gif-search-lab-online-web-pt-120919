import React from "react"

const GifList = (props) => {
    // console.log("gif list", props)
    return(
        <div>
            <ul>
                {props.gifs.map(gif => {
                    return <li><img src={gif.url}></img></li>
                })}
                {/* {console.log("gif props", props.gifs)} */}
            </ul>
        </div>
    )
 }

 export default GifList