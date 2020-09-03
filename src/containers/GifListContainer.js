import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    submitHandler = (searchTerm) => {
        this.fetchGifs(searchTerm)
    }

    render() {
        return (
            <React.Fragment>
                <GifSearch submitHandler={this.submitHandler} />
                <GifList gifs={this.state.gifs} /> 
            </React.Fragment>
        )
    }
    
    componentDidMount() {
        this.fetchGifs()
    }

    // componentDidUpdate() {

    //     console.log("Good job your search worked!")
    // }

    fetchGifs = (term = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g&limit=10`)
            .then(resp => resp.json())
            .then(data=> this.setState({ gifs: data.data}))
    }
}

export default GifListContainer

{/* <GifListContainer /> will be responsible for fetching the data from the giphy API, 
storing the first 3 gifs from the response in its component state, and passing that data down to its child, 
the <GifList> component, as a prop. */}

