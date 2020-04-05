import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getGenres } from "../services/genreService";
import { getMovies, deleteMovie } from "../services/movieService";
import { paginate } from "../utils/paginate";

import Input from "./common/input";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];

    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }

  handleDelete = async (id) => {
    const originalMovies = this.state.movies;

    const movies = originalMovies.filter((movie) => movie._id !== id);
    this.setState({ movies });

    try {
      await deleteMovie(id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("No movie found");

      this.setState({ movies: originalMovies });
    }
  };

  handleLike = (id) => {
    const movies = [...this.state.movies];
    const index = movies.findIndex((m) => m._id === id);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1,
      searchQuery: "",
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtered;
    if (selectedGenre && selectedGenre._id) {
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);
    } else if (searchQuery) {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery)
      );
    } else {
      filtered = allMovies;
    }
    // selectedGenre && selectedGenre._id
    //   ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
    //   : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return {
      totalCount: sorted.length,
      data: movies,
    };
  };

  handleSearchInputOnChange = ({ currentTarget }) => {
    const { value } = currentTarget;

    if (!value) {
      this.setState({ searchQuery: "" });
      return;
    }

    // const movies = getMovies();
    // const result = movies.filter((m) =>
    //   m.title.toLowerCase().startsWith(value)
    // );

    this.setState({
      searchQuery: value,
      currentPage: 1,
      selectedGenre: {},
    });
  };

  render() {
    const {
      movies: allMovies,
      genres,
      pageSize,
      currentPage,
      sortColumn,
    } = this.state;
    const length = allMovies.length;

    if (length === 0) {
      return <h5>There are no movies in database</h5>;
    }

    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link to="/movies/new" className="btn btn-primary mb-4">
            New Movie
          </Link>
          <h5>Showing {totalCount} movies in the database</h5>
          <Input
            id="search"
            name="search"
            placeholder="Search..."
            value={this.state.searchQuery}
            onChange={this.handleSearchInputOnChange}
          />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
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
