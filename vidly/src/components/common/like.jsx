import React, { Component } from "react";

const Like = props => {
  let classes = "fa fa-heart";
  return (
    <i
      className={props.liked ? classes : `${classes}-o`}
      area-hidden="true"
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
