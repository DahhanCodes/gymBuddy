import React from 'react'
import './styles.css'
import {InputGroup, FormControl, Button} from 'react-bootstrap'


function MyHomescreen() {
  return (
    <div className= "my-homescreen">
         <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
      Button
    </Button>
  </InputGroup>
    </div>
  );
}

export default MyHomescreen;