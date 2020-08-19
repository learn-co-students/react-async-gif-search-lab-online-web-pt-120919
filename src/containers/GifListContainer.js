import React, {Component} from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    }
  }

  handleSubmit(e, query) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(
        (result) => {
          this.setState({
            gifs: [result.data[0], result.data[1], result.data[2]]
          }, () => console.log(this.state))
        })
        e.preventDefault();

  }

  render() {
    return (
      <div>
          <GifSearch handleSubmit={this.handleSubmit.bind(this)}/>
          <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}