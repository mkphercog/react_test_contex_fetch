import React, { useContext } from "react";
import { contextStorageApp } from "./contextStorageApp";
import { RenderRandomPokemon } from "./RenderRandomPokemon";

export const Login = () => {
  const { URL, isLogged, setIsLogged, setFetchedPokemonData, setIsFetching } =
    useContext(contextStorageApp);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  const handleData = async () => {
    try {
      setIsFetching(true);
      await fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setIsFetching(false);
          setFetchedPokemonData(res);
        });
    } catch (error) {
      console.log(error);
      setIsFetching(false);
      setFetchedPokemonData({
        name: "ERROR",
        id: 0,
        sprites: { front_default: "" },
        base_experience: 0,
      });
    }
  };

  return (
    <>
      <button onClick={handleLogin}>Zaloguj</button>
      <button onClick={handleLogout}>Wyloguj</button>
      {isLogged && (
        <>
          <button onClick={handleData}>Wylosuj pokemona</button>
          <RenderRandomPokemon />
        </>
      )}
    </>
  );
};
