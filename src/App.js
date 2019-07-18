import React, {useState, useEffect} from "react";
import axios from 'axios'
import PhotoCard from './components/PhotoCard'
import Header from './components/Header'

import "./App.css";


function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(
      "https:api.nasa.gov/planetary/apod?api_key=cvQfsM1Yd2opQ3UAQEufPMMPRinnTReNGgUeirlt&date=2019-04-27"
    )
    .then(res => {
      setData(res.data)
    });
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!

      </p>
      {data
     ? <PhotoCard title={data.title}
                  url={data.url}
                  explanation={data.explanation}
                  date={data.date} />
       : <div>Loading</div>}
  

    </div>
  );
}

export default App;
