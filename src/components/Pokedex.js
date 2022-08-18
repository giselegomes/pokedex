import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <div>
      <header className="pokedex__header">
        <h1>Pokedex</h1>
        <p>Páginação</p>
      </header>
      <main>
        <div>
          {loading || !pokemons ? (
            <div> Carregando aaaa</div>
            ) : (
            <div className="pokedex__grid">
              {pokemons && pokemons.map((pokemon, index) => {
                return (
                  <Pokemon key={index} pokemon={pokemon}/>
                );
              })}
            </div>)}
        </div>
      </main>
    </div>
  )
}

export default Pokedex;