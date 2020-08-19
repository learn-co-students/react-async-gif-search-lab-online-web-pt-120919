import React, {Component} from 'react'

export default class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map(g => <li><iframe src={g.embed_url} width="100" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href={g.url}>via GIPHY</a></p></li>)}
      </ul>
    )
  }
}

