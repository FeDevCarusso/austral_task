import React, { createContext, useEffect, useState } from "react";
import { getAllPokemons } from "../api/axios";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [pokemonsState, setPokemonsState] = useState([]);
  const [isFirstTimeFetched, setIsFirstTimeFetched] = useState(false);

  async function fetchPokemons(limit, page) {
    const pokemons = await getAllPokemons(limit, page);
    setPokemonsState((prev) => [...prev, ...pokemons]);
  }
  useEffect(function () {
    if (!isFirstTimeFetched) {
      setIsFirstTimeFetched(true);
    }
    fetchPokemons();
  }, []);

  return (
    <ApiContext.Provider
      value={{ pokemonsState: pokemonsState, fetchPokemons }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
