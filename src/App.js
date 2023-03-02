// src/App.js
import "./App.css";
import { Route, Routes } from 'react-router-dom';
// import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from "axios"
import { useState, useEffect } from "react";

function App() {

const[posts, setPosts] = useState([])


useEffect(( )=> { 
  axios.get("https://ih-countries-api.herokuapp.com/countries")
  .then(response =>{
    setPosts(response.data)

  
  }
  

  )
  .catch(err =>console.log("help me"))  
  }, [])

  return (
    <div className="App">
      <Navbar />
      {/* <CountriesList /> */}

      <Routes>
        <Route path="/countries" element={<CountriesList countries={posts}/>} />
        <Route path="/countries/:countryId" element={<CountryDetails countries={posts} />} />
      </Routes>
     {/* <Route path="/:id" element={ <SomeComponent someData={someData} /> } />  */}

    </div>
  );
}

export default App;
