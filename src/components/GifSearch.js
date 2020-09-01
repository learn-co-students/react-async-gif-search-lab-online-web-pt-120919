import React, { Component } from "react"

class GifSearch extends Component {

    state = {
        query: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitForm(this.state.query)
    }

    render() {
        console.log('props', this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})}/>
                </form>
            </div>
        )
    }
}

export default GifSearch