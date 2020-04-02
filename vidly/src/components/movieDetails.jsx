import React from "react";

const MovieDetails = ({ history, match }) => {
  const handleSave = () => {
    history.replace("/movies");
  };

  return (
    <React.Fragment>
      <h1>Movie from {match.params.id}</h1>
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </React.Fragment>
  );
};

export default MovieDetails;
