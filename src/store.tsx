import { proxy } from "valtio";
import { devtools } from "valtio/utils";
import { Pokemon, deleteItem, updateItem } from "./util";

interface Store {
  isEditing: boolean;
  pokemons: Pokemon[];
  pokemon: Pokemon;
  addPokemon: (data: Pokemon) => void;
  selectPokemon: (data: Pokemon) => void;
  deletePokemon: (id: number) => void;
  updatePokemon: (data: Pokemon) => void;
}

const store = proxy<Store>({
  isEditing: false,
  pokemons: [],
  pokemon: { id: 0, name: "", power: "", description: "" },
  selectPokemon: (data: Pokemon) => {
    store.isEditing = true;
    store.pokemon = data;
  },
  addPokemon: (data: Pokemon) => {
    store.pokemons = [
      { ...data, id: Math.floor(Math.random() * 10000) },
      ...store.pokemons,
    ];
  },
  deletePokemon: (id: number) => {
    store.pokemons = deleteItem(store.pokemons, id);
  },
  updatePokemon: (data: Pokemon) => {
    store.pokemons = updateItem(store.pokemons, data);
    store.isEditing = false;
  },
});

devtools(store, "Pokemon");

export default store;
