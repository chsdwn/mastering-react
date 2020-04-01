import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

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

  render() {
    return (
      <React.Fragment>
        {this.state.movies.length > 0 ? (
          <h5>Showing {this.state.movies.length} movies in the database</h5>
        ) : (
          <h5>There are no movies in database</h5>
        )}
        {this.state.movies.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
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
        )}
      </React.Fragment>
    );
  }
}

export default Movies;
