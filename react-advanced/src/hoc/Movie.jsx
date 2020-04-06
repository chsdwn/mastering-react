import React, { Component } from "react";

import withTooltip from "./withTooltip";

export default withTooltip(
  class Movie extends Component {
    render() {
      return (
        <div>
          Movie
          {this.props.showTooltip && <div>Some tip</div>}
        </div>
      );
    }
  }
);
