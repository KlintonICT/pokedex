import { SetStateAction, useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

import PokemonModalItem from './PokemonModalItem';

interface IProps {
  pokemons: IPokemon[];
  pokedexes: IPokemon[];
  setPokedexes: (pokedexes: SetStateAction<IPokemon[]>) => void;
}

const PokemonList = ({ pokemons, pokedexes, setPokedexes }: IProps) => {
  const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    const filtered = filteredPokemonsFromPokedex();
    setFilteredPokemons(filtered);
  }, []);

  const filterPokemon = (id: string) => {
    let filtered = filteredPokemonsFromPokedex();
    filtered = filtered.filter((_pokemon: IPokemon) => _pokemon.id !== id);
    setFilteredPokemons(filtered);
  };

  const filteredPokemonsFromPokedex = () => {
    let filtered: IPokemon[] = [...pokemons];
    pokedexes.map((_pokedex: IPokemon) => {
      filtered = [...filtered].filter((_pokemon: IPokemon) => _pokemon.id !== _pokedex.id);
    });
    return filtered;
  };

  return (
    <Box p="10px">
      {filteredPokemons.length > 0 ? (
        filteredPokemons.map((pokemon: IPokemon) => (
          <PokemonModalItem {...{ pokemon, setPokedexes, filterPokemon }} key={pokemon.id} />
        ))
      ) : (
        <Text color="bottomBarBackground" textAlign="center">
          Pokemons were already added to Pokedex.
        </Text>
      )}
    </Box>
  );
};

export default PokemonList;
