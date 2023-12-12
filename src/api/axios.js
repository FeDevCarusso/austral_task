import axios from "axios";
const gqlEndpoint = "https://beta.pokeapi.co/graphql/v1beta";
const v2 = "https://pokeapi.co/api/v2";

let getAllPokemons = async (limit = 10, page = 1) => {
  try {
    const response = await axios.get(
      `${v2}/pokemon?limit=${limit}&offset=${(page - 1) * limit}`
    );

    const pokemonList = response?.data?.results;

    const detailedPokemonList = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const detailedResponse = await axios.get(pokemon?.url);
        return detailedResponse?.data;
      })
    );

    return detailedPokemonList
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getAllPokemonsGraph = async (limit = 10, page = 3) => {
  const query = `
    query {
      pokemon_v2_pokemon(limit: ${limit}, offset: ${(page - 1) * limit}) {
        id 
        name 
        height
        weight
        base_experience
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(gqlEndpoint, { query });
    const data = response?.data?.data?.pokemon_v2_pokemon;
    if (data) {
      const parseData = data?.map((pokemon) => {
        return {
          ...pokemon,
          type: pokemon?.pokemon_v2_pokemontypes?.map((type) => {
            return type?.pokemon_v2_type.name;
          }),
          pokemon_v2_pokemontypes: null,
        };
      });
      return parseData;
    }
    return [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getAllPokemons };
