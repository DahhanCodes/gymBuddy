import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import AppContext from "./context";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ErrorPage from "./pages/404/404.js";

function App() {
  return (
    <Router>
      <AppContext>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Home />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </AppContext>
    </Router>
  );
}

export default App;
