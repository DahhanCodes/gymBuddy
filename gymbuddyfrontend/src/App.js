import './App.css';
import Navbar from './components/Navbar';
import MyHomescreen from './components/Navbar/Homescreen';


function App() {
  return (
    <div className= "homescreen">
      <Navbar />
      <MyHomescreen />
    </div>
  );
}

export default App;
