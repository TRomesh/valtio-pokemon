import { useSnapshot } from "valtio";
import { Pokemon } from "../util";
import store from "../store";
import {
  List,
  ListItem,
  ListIcon,
  ListContent,
  ListHeader,
  ListDescription,
  Segment,
} from "semantic-ui-react";

function Row({
  id,
  name,
  power,
  description,
  selectPokemon,
  deletePokemon,
}: {
  id: number;
  name: string;
  power: string;
  description: string;
  selectPokemon: (pokemon: Pokemon) => void;
  deletePokemon: (id: number) => void;
}): JSX.Element {
  return (
    <ListItem>
      <ListIcon
        name="trash alternate outline"
        onClick={() => {
          deletePokemon(id);
        }}
      ></ListIcon>
      <ListIcon
        name="edit outline"
        onClick={() => {
          selectPokemon({ id, name, power, description });
        }}
      ></ListIcon>
      <ListContent>
        <ListHeader as="h3">{name}</ListHeader>
        <ListHeader as="h5">{power}</ListHeader>
        <ListDescription>{description}</ListDescription>
      </ListContent>
    </ListItem>
  );
}

function PokemonList(): JSX.Element {
  const snapshot = useSnapshot(store);

  const deletePokemon = (id: number) => {
    store.deletePokemon(id);
  };

  const selectPokemon = (pokemon: Pokemon) => {
    store.selectPokemon(pokemon);
  };

  return (
    <Segment>
      <List>
        {snapshot.pokemons &&
          snapshot.pokemons.map((pokemon) => {
            return (
              <Row
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                power={pokemon.power}
                selectPokemon={selectPokemon}
                deletePokemon={deletePokemon}
                description={pokemon.description}
              ></Row>
            );
          })}
      </List>
    </Segment>
  );
}

export default PokemonList;
