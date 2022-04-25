import React from "react";
import { useQuery } from '@apollo/client';
import { Form, Button, Modal } from "react-bootstrap";
import { QUERY_USERS } from '../../utils/queries';
import { format } from "express/lib/response";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../../pages/Home"
const { loading, data } = useQuery(QUERY_USERS);
const User = data?.User || [];
console.log(User);
const LoginPage = () => {
  $('#loginForm').on('submit', function identify() {
    var emailInput = $('#emailInput').val().trim();
    var passInput = $('#passInput').val().trim();
    if (emailInput == loginInfo.User.email && passInput == loginInfo.User.password) {
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      )
    }
    else {
      LoginPage()
      return (
        <Modal>
          <Modal.Title>
            Wrong Login Info
          </Modal.Title>
          <Modal.Body>
            Please make sure you are using the correct username and password
          </Modal.Body>
        </Modal>
        
      )
    }

  })
  const loginInfo = map.User(identify);



  return (
    <Form id="loginForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control id="emailInput" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control id="passInput" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginPage;
