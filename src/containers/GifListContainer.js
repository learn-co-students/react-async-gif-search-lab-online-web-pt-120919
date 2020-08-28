import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";
export default class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  handleSubmit = searchString => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=c3SdUvBTdkOIzAm6IPZimZDttTaJX6MJ&rating=g`
    ).then(resp =>
      resp.json().then(gif =>
        this.setState({
          gifs: gif.data
        })
      )
    );
  };

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
