import { createContext, useState } from 'react';
export const MyContext = createContext();

function AppContext({ children }) {
  const [workouts, setWorkouts] = useState([]);

  return (
    <MyContext.Provider value={{ workouts, setWorkouts}}>
        {children}
    </MyContext.Provider>
  );
}

export default AppContext;
