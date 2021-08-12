export interface Pokemon {
  id: number;
  name: string;
  power: string;
  description: string;
}

export const updateItem = (array: Pokemon[], data: Pokemon) => {
  let pokemon = array.find((pokemon) => pokemon.id === data.id);
  let updatedPokemon = { ...pokemon, ...data };
  let pokemonIndex = array.findIndex((pokemon) => pokemon.id === data.id);

  return [
    ...array.slice(0, pokemonIndex),
    updatedPokemon,
    ...array.slice(++pokemonIndex),
  ];
};

export const deleteItem = (array: Pokemon[], id: Number) => {
  return array.filter((pokemon) => pokemon.id !== id);
};
