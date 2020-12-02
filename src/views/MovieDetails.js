import React, { Component } from "react";
import api from "../services/tv-api.js";

export default class MovieDetails extends Component {
  state = { movies: null };

  componentDidMount() {
    api.fetchShowDetails(this.props.match.params.filmId).then((film) => this.setState({ movies: film }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        {movies && (
          <>
            <img src={movies.image.medium} alt={movies.name} />
            <h1>{movies.name}</h1>
          </>
        )}
      </div>
    );
  }
}
