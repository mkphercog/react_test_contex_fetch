import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { contextStorageApp } from "./contextStorageApp";

export function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [fetchedPokemonData, setFetchedPokemonData] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const min = 1;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  const URL = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

  return (
    <contextStorageApp.Provider
      value={{
        URL,
        isLogged,
        setIsLogged,
        isFetching,
        setIsFetching,
        fetchedPokemonData,
        setFetchedPokemonData,
      }}
    >
      <p style={{ color: isLogged ? "green" : "red" }}>{`Jesteś ${
        isLogged ? "" : "nie"
      } zalogowany`}</p>
      <Login />
    </contextStorageApp.Provider>
  );
}
