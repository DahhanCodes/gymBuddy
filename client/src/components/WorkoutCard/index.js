import React from "react";
import { Card, Button } from "react-bootstrap";
import WorkoutModal from "../WorkoutModal";

function WorkoutCard({ bodyPart, gifUrl, equipment, name, target }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={gifUrl} />
      <Card.Body>
        <Card.Title>{bodyPart}</Card.Title>
        <WorkoutModal title={bodyPart} target={target} equipment={equipment} name={name} />
      </Card.Body>
    </Card>
  );
}

export default WorkoutCard;

// , equipment, name, target, bodyPart,

//  {/* <Card.Text>
//           {/* {equipment}
//           {name}
//           {target} */}
//           </Card.Text>
