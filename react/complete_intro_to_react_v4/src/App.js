import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Results from "./Results";
import Details from "./Detaills";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>

        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));