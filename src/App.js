import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { searchPokemon } from "./api";

function App() {
  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    console.log("pokemon ", result);
  }
  return (
    <div>
      <Navbar />
      <Searchbar 
        //executa na busca
        onSearch={onSearchHandler}
      />
      <div className="App">
         
      </div>
    </div>
  );
}

export default App;
