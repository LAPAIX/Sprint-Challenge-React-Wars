import React, { useState, useEffect } from "react";
import "./App.css";
//importing the and will be used to show the character
import CardComponent from "./components/CardComponent";
import axios from "axios";

const App = () => {
  //   // Try to think through what state you'll need for this app before starting. Then build out
  //   // the state properties here.

  //   // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  //   // side effect in a component, you want to think about which state and/or props it should
  //   // sync up with, if any.

  //adding the state
  const [data, setStartWarData] = useState([]);

  //fetching Data
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/") 
      .then(result => {
        console.log(result.data);
        setStartWarData(result.data.results);
      })
      .catch(err => {
        console.log("error: ", err);
      });
  }, []); //empty Dependency

  return (
    <div>
      {data.map(data => {
        return (
          <CardComponent
            name={data.name}
            height={data.height}
            mass={data.mass}
            hair={data.hair_color}
          />
        );
      })}
    </div>
  );

  //End of the App function
};

export default App;
