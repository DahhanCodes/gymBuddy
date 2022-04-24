import Home from './pages/Home';
import './App.css';
import Navbar from './components/Navbar';
import AppContext from './context';



function App() {
  return (
    <AppContext>
      <div className= "homescreen">
        <Navbar />
        <Home />
      </div>
    </AppContext>  
    );
  } 

export default App;
