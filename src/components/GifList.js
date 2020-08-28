import React from "react";

const GifList = props => {
  return (
    <div>
      <ul>
        {props.gifs.slice(0, 3).map(gif => (
          <li>
            <img
              key={gif.images.original.url}
              src={gif.images.original.url}
              alt="gif"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GifList;
