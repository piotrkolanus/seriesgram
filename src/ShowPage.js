import React, { Component } from "react";
// import Spinner from "react-svg-spinner";
import styles from "./ShowPage.module.css";
import CenteredSpinner from "./CenteredSpinner";

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
      return <CenteredSpinner />;
    }
    if (Array.isArray(this.state.show)) {
      return <h1>Ni ma takiej strony</h1>;
    }
    return (
      <div className={styles.showPage}>
        <div className={styles.showContainer}>
          <h1>{this.state.show.name}</h1>
          <div className={styles.imgContainer}>
            <img src={this.state.show.image_thumbnail_path} alt="thumbnail" />
          </div>
          <p className={styles.description}>{this.state.show.description}</p>
          <button onClick={() => this.props.history.push("/")}>Go back!</button>
        </div>
      </div>
    );
  }
}

export default ShowPage;
