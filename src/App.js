import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {
 
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex />
    </div>
  );
}

export default App;
