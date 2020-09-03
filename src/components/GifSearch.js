import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchTerm: ""
    }

    changeHandler = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.searchTerm)
        this.setState({ searchTerm: "" })
    }

    render() {
        return (

            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="search" value={this.state.searchTerm} onChange={this.changeHandler} />
                <input type="submit" value="search" />
            </form>
        )
    }
}


export default GifSearch

// The <GifSearch /> component will render a form that receives the user input for the giphy search. 
// The text input should be a controlled component that stores the value of the input in its component state and renders the DOM accordingly. 
// The React component is always in charge of what the DOM looks like.

// <GifSearch /> should receive a callback prop from its parent. On a submit event, 
// it should invoke that callback prop with the value of the text input. 
// It is this callback function, defined in <GifListContainer />, 
// that will actually query the API with the text the user has entered.