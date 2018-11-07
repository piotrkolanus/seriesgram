import React, { Component } from "react";
import Spinner from "react-svg-spinner";
import Show from "./Show";
import Search from "./Search";

import styles from "./App.module.css";

class App extends Component {
  state = {
    page: 0,
    tvShows: null,
    isLoading: false,
    search: false
  };
  componentDidMount() {
    this.loadTvShows(1);
  }

  loadTvShows = page => {
    fetch(`https://www.episodate.com/api/most-popular?page=${page}`)
      .then(res => res.json())
      .then(response =>
        this.setState(prevState => ({
          tvShows: [...(prevState.tvShows || []), ...response.tv_shows],
          page: response.page,
          isLoading: false,
          search: false
        }))
      );
  };

  loadMore = () => {
    this.setState({ isLoading: true });
    this.loadTvShows(this.state.page + 1);
  };

  goToShow = show => {
    this.props.history.push(`/${show}`);
  };

  onSearchFinish = shows => this.setState({ tvShows: shows, search: true });

  render() {
    if (!this.state.tvShows) {
      return <Spinner size="64px" speed="slow" />;
    }

    if (this.state.tvShows.length === 0) {
      return <h3> Nie ma takiego show</h3>;
    }
    const isLoadMoreVisible =
      !this.state.isLoading &&
      this.state.tvShows.length > 0 &&
      !this.state.search;

    return (
      <>
        <Search onSearchFinish={this.onSearchFinish} />
        <div className={styles.showsWrapper}>
          {this.state.tvShows.map(show => (
            <Show key={show.id} show={show} goToShow={this.goToShow} />
          ))}
          {isLoadMoreVisible && (
            <button onClick={this.loadMore}>Load more</button>
          )}
          {this.state.isLoading && <Spinner size="24px" />}
        </div>
      </>
    );
  }
}

export default App;
