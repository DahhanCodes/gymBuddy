import React from "react";
import "./styles.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function Jumbotron() {
  return (
    <div className="my-jumbotron">
      <h1>Welcome</h1>
      <h2>You can search your desired Workout</h2>
      <div className= "button-input">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search For A Workout"
          aria-label="Workout Search Input"
          aria-describedby="workout-search-button"
        />
        <Button variant="danger" id="workout-search-button">
          Button
        </Button>
      </InputGroup>
      </div>
    </div>
  );
}

export default Jumbotron;
