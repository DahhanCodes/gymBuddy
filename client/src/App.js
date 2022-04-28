<<<<<<< HEAD
import { useContext, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MyContext } from "./context";
import ErrorPage from "./pages/404/404.js";
import Favourites from "./pages/Favourites/Favourites";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  const { user, setUser } = useContext(MyContext);
  useEffect(() => {
    axios.post("/auto-login").then(({ data }) => setUser(data));
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {!user && (
          <>
            <Route exact path="/login">
              <Login />
=======
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { MyContext } from './context';
import ErrorPage from './pages/404/404.js';
import Favourites from './pages/Favourites/Favourites';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
   const { user, setUser } = useContext(MyContext);
   // useEffect(() => {
   //    axios.post('/auto-login').then(({ data }) => setUser(data));
   // }, []);

   return (
      <Router>
         <Navbar />
         <Switch>
            <Route exact path="/">
               <Home />
>>>>>>> 039259babb8a4e416dcb013616efd150aac6891d
            </Route>
            {!user && (
               <>
                  <Route exact path="/login">
                     <Login />
                  </Route>
                  <Route exact path="/signup">
                     <Signup />
                  </Route>
               </>
            )}
            {user && (
               <Route exact path="/my-favourites">
                  <Favourites />
               </Route>
            )}
            <Route>
               <ErrorPage />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
