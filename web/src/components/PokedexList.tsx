import { SimpleGrid } from '@chakra-ui/react';
import { SetStateAction } from 'react';

import PokedexItem from './PokedexItem';

interface IProps {
  pokedexes: IPokemon[];
  setPokedexes: (pokedexes: SetStateAction<IPokemon[]>) => void;
}

const PokedexList = ({ pokedexes, setPokedexes }: IProps) => {
  return (
    <>
      <SimpleGrid columns={{ md: 1, lg: 2 }} spacing="20px">
        {pokedexes.map((pokedex: IPokemon) => (
          <PokedexItem {...{ pokedex, setPokedexes }} key={pokedex.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default PokedexList;
