import axios from "../../Axios";
import React, { useContext, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { MyContext } from "../../context";
import {useHistory} from 'react-router-dom'
const signedUp = () =>{
  window.location.replace("/")
}
function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(MyContext);
  function handleSignup(e) {
    e.preventDefault();
    if (!email || !password) {
      return(
        <Modal>
          <Modal.Body>
            Please fill out all fields before submitting
          </Modal.Body>
        </Modal>
      );
    }
    axios
      .post("/users", { email, password })
      .then(({ data }) => {
        setUser(data);
        localStorage.setItem("token", data.token);
        history.replace('/')
      })
      .catch((err) => console.log(err));
  }

  return (
    <Form onSubmit={handleSignup}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={signedUp}>
        Signup
      </Button>
    </Form>
  );
}

export default Signup;
