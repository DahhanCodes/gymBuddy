import React, { useContext } from "react";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import Login from "../../pages/Login/Login";
import { LinkContainer } from "react-router-bootstrap";
import { MyContext } from "../../context";
import { useHistory, NavLink } from "react-router-dom";
import axios from "../../Axios";
function MyNavbar() {
  const history = useHistory();
  const { user, setUser } = useContext(MyContext);
  const handleLogout = () => {
    axios.post("/logout").then(() => {
      localStorage.removeItem("token");
      setUser(null);
      history.replace("/");
    });
  };
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto" style={{flex:Row}}>
          
            <NavLink style={{margin:10}} to="/">
              Workouts
            </NavLink>

            {user ? (
              <> 
              <NavLink style={{margin:10}} to="/my-favourites">
                  Favourites
                </NavLink>
                <NavLink onClick={handleLogout}>Logout</NavLink>
               
              </>
            ) : (
              <>
                <NavLink style={{margin:10}} to="/login">
                  Login
                </NavLink>

                <NavLink style={{margin:10}} to="/signup">
                  Signup
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
