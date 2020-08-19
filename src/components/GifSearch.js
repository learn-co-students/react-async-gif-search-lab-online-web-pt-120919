import React, {Component} from 'react'

export default class GifSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
    }
  }
  
  handleChange = event => {
    this.setState({
      input: event.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.handleSubmit(e, this.state.input)}>
        <input type="text" name="search" id="search" onChange={this.handleChange} ></input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}