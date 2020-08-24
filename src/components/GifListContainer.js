import React, { Component } from "react"
import GifList from './GifList'
import GifSearch from "./GifSearch"

class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    fetchGifs = (query = "dolphin") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=2zC1azcW6qWDIwiT6W6ZqoVhiK53sr0l`)
        .then(res => res.json())
        .then(data => this.setState({gifs: data.data.slice(0, 3).map(element => ({url: element.images.original.url}))}))
    }

    // componentDidMount() {
    //     this.fetchGifs()
    // }

    handleSubmit = (e) => {
        this.fetchGifs(e.target.value)
    }

    render() {
        return (
            <div>
                <GifSearch submitForm={this.handleSubmit}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}


export default GifListContainer;