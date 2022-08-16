import React, { useState } from "react";
import { searchPokemon } from "../api";
 
const Searchbar = () => {
  const [search, setSearch] = useState("dito");
  const [pokemon, setPokemon] = useState()
  //evento
  const onChangeHandler = (e) => {
    console.log("pokemon: ", e.target.value);
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search)
  }

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
  }

  return (
    <div className="searchbar">
      <div className="searchbar__input">
        <input placeholder="Search Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="search__btn">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
      {pokemon ? (
        <div>
            <div>Name: {pokemon.name}</div>
            <div>Weigh: {pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} alt="pokemon.name" />

        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
