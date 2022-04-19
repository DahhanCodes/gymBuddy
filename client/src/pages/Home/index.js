import Jumbotron  from "../../components/Jumbotron";
import axios from "axios";
import { useEffect, useState } from "react";
import WorkoutsContainer from "../../components/WorkoutsContainer";

function Home() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios
      .get("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          "X-RapidAPI-Key":
            "c9bc40e250mshc9a0253036e8abep1a9eccjsn02f8dbdd6992",
        },
      })
      .then(({ data }) => setWorkouts(data))
      .catch((error) => console.log(error));
    
      
  },[]);

  return (
    <div>
      <Jumbotron />
      <WorkoutsContainer workouts={workouts} />
    </div>
  );
}


export default Home;



