import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      fetch(`https://www.episodate.com/api/search?q=${this.state.text}`)
        .then(res => res.json())
        .then(response => this.props.onSearchFinish(response.tv_shows));
    }
  };

  render() {
    return (
      <div>
        <h3>Search for show</h3>
        <input
          onKeyDown={this.handleKeyDown}
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
