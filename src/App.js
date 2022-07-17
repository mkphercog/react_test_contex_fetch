import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { contextStorageApp } from "./contextStorageApp";
import { createRandomURL, initialState } from "./helpers";

export function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [fetchedPokemonData, setFetchedPokemonData] = useState(initialState);
  const [isFetching, setIsFetching] = useState(false);
  const URL = createRandomURL("https://pokeapi.co/api/v2/pokemon/");
  const valueObject = {
    URL,
    isLogged,
    setIsLogged,
    isFetching,
    setIsFetching,
    fetchedPokemonData,
    setFetchedPokemonData,
  };

  return (
    <contextStorageApp.Provider value={valueObject}>
      {isLogged ? (
        <p style={{ color: "green" }}>Jesteś niezalogowany</p>
      ) : (
        <p style={{ color: "red" }}>Jesteś zalogowany</p>
      )}
      <Login />
    </contextStorageApp.Provider>
  );
}
