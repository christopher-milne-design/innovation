
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop1 from "./components/Desktop1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop-1)">
          <Desktop1 title="Innovation" frame1Props={desktop1Data.frame1Props} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const frame1Data = {
    title: "Fund 1",
    fund2: "Fund 2",
    fund3: "Fund 3",
};

const desktop1Data = {
    frame1Props: frame1Data,
};

