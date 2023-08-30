import React from "react";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Twittes from "./components/Twittes";
import Trends from "./components/Trends";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const heightValue = '100vh'; // Replace this with your desired height

  const divStyles = {
    height: heightValue
  };
  return (
    <div className="twitter">
<div style={divStyles} className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
 
<img className="dark" onClick={toggleDarkTheme} src="/images/dark.png"/>

    
      <Sidebar />
      <Twittes />
      <Trends />
     
     
    </div>
    
    </div>
  );
}

export default App;




