import React from "react";

import NavBar from "./NavBar";
import GifListContainer from "../containers/GifListContainer";
// import GifSearch from "./GifSearch";

// APIKEY = c3SdUvBTdkOIzAm6IPZimZDttTaJX6MJ
// URL = https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=c3SdUvBTdkOIzAm6IPZimZDttTaJX6MJ&rating=g

// the App component should render out the GifListContainer component

const App = () => {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
};

export default App;
