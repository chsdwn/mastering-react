import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn: "https://f567533f1f3e47979a701c86645e86ab@sentry.io/5188800",
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
