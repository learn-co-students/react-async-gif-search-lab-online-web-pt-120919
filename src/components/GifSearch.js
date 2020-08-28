import React, { Component } from "react";
// import GifListContainer from "../containers/GifListContainer";
export default class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandle = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchString);
  };
  render() {
    return (
      <form onSubmit={this.submitHandle}>
        <input
          type="text"
          onChange={this.handleChange}
          name="searchString"
          value={this.state.searchString}
        ></input>
        <input type="submit"></input>
      </form>
    );
  }
}
