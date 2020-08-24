import React, { Component } from "react"

class GifSearch extends Component {
    render() {
        return(
            <div>
                Enter a search term <input type = "search" />
                <button onClick={this.props.submitForm} type="submit">Submit</button>
            </div>
        )
    }
}

export default GifSearch