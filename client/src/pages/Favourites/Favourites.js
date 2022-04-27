import React, { useContext, useEffect } from "react";
import { MyContext } from "../../context";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Favourites() {
  const { user } = useContext(MyContext);
  useEffect(() => {
    // fetch("https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D", {
    //   headers: {
    //     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    //     "X-RapidAPI-Key": "28f0229b05msh1c360e05315a6bdp1743dcjsna40d7e104ccf",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setWorkouts(data);
    //   })
    //   .catch((error) => console.log(error));
  }, []);
  if (!user.favourites.length) {
    return (
      <div>
        <h3>You don't have any favouite workouts</h3>
        <LinkContainer to="/">
          <Button on>Add favourites</Button>
        </LinkContainer>
      </div>
    );
  }
  return (
    <div>
      <h2>Your Favourites</h2>
    </div>
  );
}

export default Favourites;
