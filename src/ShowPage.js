import React, { Component } from "react";
import Spinner from "react-svg-spinner";

class ShowPage extends Component {
  state = {
    show: null
  };
  componentDidMount() {
    fetch(
      `https://www.episodate.com/api/show-details?q=${
        this.props.match.params.showId
      }`
    )
      .then(res => res.json())
      .then(response => this.setState({ show: response.tvShow }));
  }
  render() {
    if (!this.state.show) {
      return <Spinner size="64px" speed="fast" />;
    }
    if (Array.isArray(this.state.show)) {
      return <h1>Ni ma takiej strony</h1>;
    }
    return (
      <div>
        <h3 onClick={() => this.props.history.push("/")}>Go back!</h3>
        <img src={this.state.show.image_thumbnail_path} alt="thumbnail" />
        <h4>{this.state.show.name}</h4>
        <p>{this.state.show.description}</p>
      </div>
    );
  }
}

export default ShowPage;
