import React from "react";
import { Card, Button } from "react-bootstrap";

function WorkoutCard( { bodyPart, gifUrl, equipment, name, target }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={gifUrl} />
      <Card.Body>
        <Card.Title>{bodyPart}</Card.Title>
        <Card.Text>
          {equipment}
          {name}
          {target}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default WorkoutCard;
