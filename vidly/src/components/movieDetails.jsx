import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class MovieDetails extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      genre: "", // dropdown list of genres
      numberInStock: "", // 0-100
      dailyRentalRate: "", // 0-10
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.any(),
    title: Joi.string().label("Title"),
    genre: Joi.object().required(),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number In Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      const id = this.props.match.params.id;
      if (id === undefined) return;

      const { data: movie } = await getMovie(id);
      const data = {
        _id: movie._id,
        title: movie.title,
        genre: movie.genre,
        numberInStock: parseInt(movie.numberInStock),
        dailyRentalRate: parseInt(movie.dailyRentalRate),
      };
      this.setState({ data });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  handleGenreSelect = (genreId) => {
    if (genreId) {
      const genres = [...this.state.genres];
      const genre = genres.find((g) => g._id === genreId);

      const data = { ...this.state.data };
      data.genre = genre;

      this.setState({ data });
    } else return;
  };

  doSubmit = async () => {
    const result = await saveMovie(this.state.data);
    console.log(result);

    this.props.history.push("/movies");
  };

  render() {
    return (
      <React.Fragment>
        <h2>Movie Form</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          <div className="form-group">
            <label htmlFor="genres">Genre</label>
            <select
              name="genres"
              id="genres"
              className="form-control"
              value={this.state.data.genre._id}
              onChange={(e) => this.handleGenreSelect(e.target.value)}
            >
              <option></option>
              {this.state.genres.map((genre) => (
                <option key={genre._id} value={genre._id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default MovieDetails;
