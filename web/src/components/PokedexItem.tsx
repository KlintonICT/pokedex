import { SetStateAction } from 'react';

import PokemonItem from './PokemonItem';

interface IProps {
  pokedex: IPokemon;
  setPokedexes: (pokedexes: SetStateAction<IPokemon[]>) => void;
}

const PokededexItem = ({ pokedex, setPokedexes }: IProps) => {
  const onClickRemovePokedex = (id: string) => {
    setPokedexes((prevState: IPokemon[]) => prevState.filter((_pokedex: IPokemon) => _pokedex.id !== id));
  };

  return <PokemonItem {...{ pokemon: pokedex, onClickRemovePokedex }} />;
};

export default PokededexItem;
