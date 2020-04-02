import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Customers from "./components/customers";
import MovieDetails from "./components/movieDetails";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import NotFound from "./components/common/notFound";
import Rentals from "./components/rentals";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Switch>
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
