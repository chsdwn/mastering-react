import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  onMovieDeleteHandler = id => {
    const movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({
      movies
    });
  };

  handleLike = id => {
    const movies = [...this.state.movies];
    const index = movies.findIndex(m => m._id === id);
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies
    });
  };

  render() {
    const { movies } = this.state;
    const length = movies.length;

    if (length === 0) {
      return <h5>There are no movies in database</h5>;
    }

    return (
      <React.Fragment>
        <h5>Showing {length} movies in the database</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">&nbsp;</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    key={movie._id}
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie._id)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.onMovieDeleteHandler(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
