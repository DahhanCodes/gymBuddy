import React, { useContext, } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from '../../Axios';
import { MyContext } from '../../context';
function MyNavbar() {
   const history = useHistory();
   const { user, setUser } = useContext(MyContext);
   const handleLogout = () => {
      axios.post('/logout').then(() => {
         localStorage.removeItem('token');
         setUser(null);
         history.replace('/');
      });
   };
   const reload = () => {
      setTimeout(() => {
         window.location.reload();
      }, 100);
   };
   return (
      <Navbar bg="light" expand="lg">
         <Container>
            <LinkContainer to="/" onClick={reload}>
               <Navbar.Brand>Workouts</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               {!user && (
                  <Nav className="me-auto">
                     <LinkContainer to="/login" onClick={reload}>
                        <Nav.Link>Login</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/signup" onClick={reload}>
                        <Nav.Link>Signup</Nav.Link>
                     </LinkContainer>
                  </Nav>
               )}
               {user && (
                  <>
                     <LinkContainer to="/my-favourites" onClick={reload}>
                        <Nav.Link>Favourites</Nav.Link>
                     </LinkContainer>
                     <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                  </>
               )}
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default MyNavbar;
