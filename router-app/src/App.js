import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/admin/dashboard";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Posts from "./components/posts";
import ProductDetails from "./components/productDetails";
import Products from "./components/products";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route
            path="/products"
            render={props => <Products sortBy="newest" {...props} />}
          />
          <Route path="/posts/:year?/:month?" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
