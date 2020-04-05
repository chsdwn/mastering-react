import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Customers from "./components/customers";
import LoginForm from "./components/loginForm";
import MovieDetails from "./components/movieDetails";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import RegisterForm from "./components/registerForm";
import Rentals from "./components/rentals";
import NotFound from "./components/common/notFound";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/new" component={MovieDetails} exact />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
          <Redirect to="/movies" from="/" exact />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
