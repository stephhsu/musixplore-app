import React from "react"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
       
        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }
       
    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    search() {
        this.props.onSearch(this.state.term);
    }
       
    handleEnter(event) {
        if (event.keyCode === 13) {
            this.search();
        }
    }
       
    render() {
        return (
            <form className="form">
                <input 
                className="input" 
                type="text"
                placeholder="search for a song"
                onChange={this.handleTermChange}
                onKeyUp={this.handleEnter}/>
                <button className="searchButton" onClick={this.search}>search</button>
            </form>
        );
    }
}


export default SearchBar