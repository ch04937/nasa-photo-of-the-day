import React, {useState, useEffect} from "react";
import ReactDom from 'react-dom'

import NasaGrid from '../src/components/NasaGrid'

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {

  })
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!

      </p>
      <NasaGrid limit ={10}  />
      {/*
      <NasaGrid limit = {10} column = {3}/>
        <NasaCards>
          <img>
            <a href =''>
      */}

    </div>
  );
}

export default App;
