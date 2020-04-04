import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import logger from "./services/logService";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

logger.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
