import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MyContext } from "../../context";

function WorkoutModal({ title, target, equipment, name }) {
  const [show, setShow] = useState(false);
  const { user } = useContext(MyContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        See Workout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{equipment}</Modal.Body>
        <Modal.Body>{name}</Modal.Body>
        <Modal.Body>{target}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {user && (
            <Button variant="primary" onClick={handleClose}>
              Add To Workouts
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WorkoutModal;
