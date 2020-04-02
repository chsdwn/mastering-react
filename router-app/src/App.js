import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/admin/dashboard";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Posts from "./components/posts";
import Products from "./components/products";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/posts" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          {/* inside Switch no need to use exact*/}
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
