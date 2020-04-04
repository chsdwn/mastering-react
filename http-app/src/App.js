import React, { Component } from "react";
import axios from "axios";

import "./App.css";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    alert("An unexpected error occured");
  }

  return Promise.reject(error);
});

const API_ENDPOINT = "http://jsonplaceholder.typicode.com/posts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    // pending > resolve (success) OR rejected (failure)
    const { data: posts } = await axios.get("aa" + API_ENDPOINT);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "title", body: "body" };
    const { data: post } = await axios.post(API_ENDPOINT, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "UPDATED";
    // axios.patch(`${API_ENDPOINT}/${post.id}`, { title: post.title });
    await axios.put(`${API_ENDPOINT}/${post.id}`, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    /* <== Pessimistic update ==> */
    // await axios.delete(`${API_ENDPOINT}/${post.id}`);
    // const posts = this.state.posts.filter((p) => p.id !== post.id);
    // this.setState({ posts });

    /* <== Optimistic update ==> */
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await axios.delete(`${API_ENDPOINT}/${post.id}`);
    } catch (ex) {
      // Expected (404: not found, 400: bad request) - CLIENT ERRORS
      // - Display a specific error message
      if (ex.response && ex.response.status === 404)
        console.log("This post has already been deleted");
      // Unexpected (network down, server down, db down, bug)
      // - Log them
      // - Display a generic and friendly error message

      console.log(ex);
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
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

export default App;
