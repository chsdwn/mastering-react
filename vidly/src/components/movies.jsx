import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

import Like from "./common/like";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];

    this.setState({
      movies: getMovies(),
      genres
    });
  }

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

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1
    });
  };

  render() {
    const {
      movies: allMovies,
      genres,
      pageSize,
      currentPage,
      selectedGenre
    } = this.state;
    const length = allMovies.length;

    if (length === 0) {
      return <h5>There are no movies in database</h5>;
    }

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <h5>Showing {filtered.length} movies in the database</h5>
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
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
