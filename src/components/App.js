import React from 'react'

import NavBar from './NavBar'
import GifListContainer from './GifListContainer'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App

// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=2zC1azcW6qWDIwiT6W6ZqoVhiK53sr0l