import { useState, useEffect } from "react";
import { Pokemon } from "../util";
import {
  Form,
  FormField,
  Header,
  Input,
  Button,
  Segment,
} from "semantic-ui-react";
import { useSnapshot } from "valtio";
import store from "../store";

const initState: Pokemon = { id: 0, name: "", power: "", description: "" };

function PokemonForm(): JSX.Element {
  const { pokemon, isEditing } = useSnapshot(store);
  const [newPokemon, setNewPokemon] = useState(initState);

  useEffect(() => {
    setNewPokemon(pokemon);
  }, [pokemon]);

  const createPokemon = () => {
    store.addPokemon(newPokemon);
    clear();
  };

  const updatePokemon = () => {
    store.updatePokemon(newPokemon);
    clear();
  };

  const onChange = (type: string, value: string) => {
    setNewPokemon({ ...newPokemon, [type]: value });
  };

  const clear = () => {
    setNewPokemon(initState);
  };

  const cancel = () => {
    clear();
  };

  return (
    <Segment>
      <Form>
        <FormField>
          <Header as="h5">Name</Header>
          <Input
            value={newPokemon.name}
            onChange={(e, { value }) => onChange("name", value)}
          />
        </FormField>
        <FormField>
          <Header as="h5">Power</Header>
          <Input
            value={newPokemon.power}
            onChange={(e, { value }) => onChange("power", value)}
          />
        </FormField>
        <FormField>
          <Header as="h5">Description</Header>
          <Input
            value={newPokemon.description}
            onChange={(e, { value }) => onChange("description", value)}
          />
        </FormField>
        <Button onClick={() => (isEditing ? updatePokemon() : createPokemon())}>
          {isEditing ? "Update" : "Save"}
        </Button>
        <Button onClick={() => cancel()}>Cancel</Button>
      </Form>
    </Segment>
  );
}

export default PokemonForm;
