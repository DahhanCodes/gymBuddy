import Jumbotron from "../../components/Jumbotron";
import axios from "axios";
import { useEffect, useContext } from "react";
import WorkoutsContainer from "../../components/WorkoutsContainer";
import { MyContext } from "../../context";

function Home() {
  const { workouts, setWorkouts } = useContext(MyContext);

  useEffect(() => {
    axios
      .get("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          "X-RapidAPI-Key":
            "28f0229b05msh1c360e05315a6bdp1743dcjsna40d7e104ccf",
        },
      })
      .then(({ data }) => setWorkouts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Jumbotron />
      <WorkoutsContainer workouts={workouts} />
    </div>
  );
}

export default Home;
