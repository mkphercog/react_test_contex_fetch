import React, { useContext } from "react";
import { contextStorageApp } from "./contextStorageApp";

export const RenderRandomPokemon = () => {
  const { fetchedPokemonData, isFetching } = useContext(contextStorageApp);
  const { name, id, sprites, base_experience } = fetchedPokemonData;

  return (
    <>
      {isFetching ? (
        <p>Ładowanie...</p>
      ) : id === 0 ? null : (
        <>
          <p> {`Nazwa: ${name}, ID: ${id}`}</p>
          <img src={sprites.front_default} alt={name} />
          <p>{`Podstawowe doświadczenie: ${base_experience} exp`}</p>
        </>
      )}
    </>
  );
};
