import React, { useContext } from "react";
import { contextStorageApp } from "./contextStorageApp";

export const RenderRandomPokemon = () => {
  const { fetchedPokemonData, isFetching } = useContext(contextStorageApp);

  return (
    <>
      {isFetching ? (
        <p>Ładowanie...</p>
      ) : (
        <>
          <p>
            {" "}
            {fetchedPokemonData
              ? `Nazwa: ${fetchedPokemonData.name}, ID: ${fetchedPokemonData.id}`
              : ""}
          </p>
          <img
            src={
              fetchedPokemonData ? fetchedPokemonData.sprites.front_default : ""
            }
            alt={fetchedPokemonData ? fetchedPokemonData.name : ""}
          />
          <p>
            {fetchedPokemonData
              ? `Podstawowe doświadczenie: ${fetchedPokemonData.base_experience} exp`
              : ""}
          </p>
        </>
      )}
    </>
  );
};
