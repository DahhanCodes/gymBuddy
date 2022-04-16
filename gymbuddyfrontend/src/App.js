// import {useEffect} from 'react'
import Home from './pages/Home';
import './App.css';
import Navbar from './components/Navbar';
// import axios from 'axios';



function App() {
  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'c9bc40e250mshc9a0253036e8abep1a9eccjsn02f8dbdd6992'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <div className= "homescreen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
