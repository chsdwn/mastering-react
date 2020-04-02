import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "./components/admin/dashboard";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Posts from "./components/posts";
import Products from "./components/products";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Route path="/products" component={Products} />
        <Route path="/posts" component={Posts} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/" component={Home} />
      </div>
    </div>
  );
}

export default App;
