import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ErrorPage from "./pages/404/404.js";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup";
import { MyContext } from "./context";
import { useContext, useEffect } from "react";
import axios from "./Axios";
import Favourites from "./pages/Favourites/Favourites";

function App() {
  const { user, setUser } = useContext(MyContext);
  useEffect(() => {
    axios.post("/auto-login").then(({ data }) => setUser(data));
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route  exact path="/" component={Home} />
        
        {user ? (
          <>

            <Route path="/my-favourites" exact component={Favourites} />

          </>
        ) : (
          <>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />

          </>
        )}
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
