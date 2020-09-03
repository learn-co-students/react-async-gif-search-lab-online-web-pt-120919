import React from 'react'

function GifList(props) {
    
    return (
        <ul>
            {props.gifs.map((gifObj) => <li><img src={gifObj.images.original.url} /></li>)}
        </ul>
    )
}

export default GifList


{/* <GifList /> is a presentational component. 
It receives data from its props and renders html given the input data. 
It can render a top level <ul> with each gif as an <li>. */}