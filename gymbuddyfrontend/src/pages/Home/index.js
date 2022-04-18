import React from "react";
import MyHomescreen from "../../components/Homeimage";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios
      .get("https://exercisedb.p.rapidapi.com/exercises/targetList", {
        headers: {
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          "X-RapidAPI-Key":
            "c9bc40e250mshc9a0253036e8abep1a9eccjsn02f8dbdd6992",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  return (
    <div>
    
      <MyHomescreen />
    </div>
  );
}

export default Home;

// const options = {
//   method: "GET",
//   url: "https://exercisedb.p.rapidapi.com/exercises",
//   headers: {
//     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     "X-RapidAPI-Key": "c9bc40e250mshc9a0253036e8abep1a9eccjsn02f8dbdd6992",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

//   .then(({ data }) => setWorkouts(data.workouts))
//   .catch((error) => console.log(error));
// }, []);


{/* <ul>
{workouts.map((workouts) => (
  <li key={workouts.id}>{workouts.title}</li>
))}
</ul> */}