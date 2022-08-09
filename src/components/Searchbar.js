import React, { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("dito");
  //evento
  const onChangeHandler = (e) => {
    console.log("pokemon: ", e.target.value);
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    console.log("pokemon: ", search);
  }
  return (
    <div className="searchbar">
      <div className="searchbar__input">
        <input placeholder="Search Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="search__btn">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;