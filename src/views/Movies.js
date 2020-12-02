import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import api from "../services/tv-api";
import innerDetails from "./InnerDetails.js";

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    api.fetchShowByQuery("moon").then((r) => {
      // console.log(r);
      this.setState({ movies: r });
    });
  }

  render() {
    const { movies } = this.state;
    console.log("movies from state", movies);
    const { match } = this.props;

    return (
      <>
        <h2>MOVIES</h2>
        {movies.length > 0 && (
          <ul>
            {movies.map((film) => {
              console.log(film);
              return (
                <li key={film.id}>
                  {/* match.url - для навигации */}
                  <Link to={`${match.url}/${film.id}`}>{film.name}</Link>
                </li>
              );
            })}
          </ul>
        )}

        {/* match.path - для маршрутов
        <Route path={`${match.path}/:filmId`} component={innerDetails} />*/}
        
      </>
    );
  }
}
