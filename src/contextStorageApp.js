import { createContext } from "react";

export const contextStorageApp = createContext({
  URL: "",
  isLogged: false,
  setIsLogged: () => {},
  isFetching: false,
  setIsFetching: () => {},
  fetchedPokemonData: {},
  setFetchedPokemonData: () => {},
});
