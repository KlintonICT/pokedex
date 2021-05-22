import { SetStateAction } from 'react';

import PokemonItem from '../PokemonItem';

interface IProps {
  pokemon: IPokemon;
  setPokedexes: (pokedexes: SetStateAction<IPokemon[]>) => void;
  filterPokemon: (id: string) => void;
}

const PokemonModalItem = ({ pokemon, setPokedexes, filterPokemon }: IProps) => {
  const onClickAddPokedex = (_pokemon: IPokemon) => {
    // add selected pokemon to pokedex list
    setPokedexes((prevState: IPokemon[]) => [...prevState, _pokemon]);

    filterPokemon(pokemon.id);
  };

  return <PokemonItem {...{ pokemon, onClickAddPokedex }} />;
};

export default PokemonModalItem;
