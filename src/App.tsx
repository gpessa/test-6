import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import House from "./pages/house";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/:id">
        <House />
      </Route>
      <Redirect to="/7b79a187-2915-461f-9a2e-fa86f653381f" />
    </Switch>
  </Router>
);

export default App;
