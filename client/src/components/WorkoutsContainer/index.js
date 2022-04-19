import React from "react";
// import "./styles.css"

function WorkoutsContainer({ workouts }) {
  return (
    <div>
      {workouts.map((workout) => {
        return <div>{workout.bodyPart}</div>;
      })}
    </div>
  );
}

export default WorkoutsContainer;



// FUNCTION BELOW BRINGS UP JUST ONE BODY PART AT A TIME

// function WorkoutsContainer({ workouts }) {

//     const [bodyParts, setBodyParts] = useState([]);

//     useEffect(() => {
//         if (workouts) {
//             let tempArray = [];
//             workouts.forEach(workout => {
//                 if (!tempArray.includes(workout.bodyPart)) {
//                     tempArray.push(workout.bodyPart);
//                 }
//             });

//             setBodyParts(tempArray);
//         }
//     }, [workouts])

//   return (
//     <div>
//       {bodyParts.map((bodyPart) => {
//         return <div>{bodyPart}</div>;
//       })}
//     </div>
//   );
// }