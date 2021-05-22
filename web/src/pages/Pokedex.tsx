import { useState } from 'react';
import { Box, Text, useDisclosure } from '@chakra-ui/react';

import PokedexList from '../components/PokedexList';
import PokemonModal from '../components/PokemonModal';

const Pokedex = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // handle pokemon modal
  const [pokedexes, setPokedexes] = useState<IPokemon[]>([]);

  return (
    <>
      <Box boxShadow="base" p="15px" textAlign="center" position="fixed" w="100%" bg="white" top={0} zIndex="2">
        <Text fontSize="4xl">My Pokedex</Text>
      </Box>

      <Box mt="6rem" mb="7rem" p="1rem">
        {pokedexes.length > 0 && <PokedexList {...{ pokedexes, setPokedexes }} />}
      </Box>

      {/* Add pokemon button */}
      <Box
        boxShadow="0px -2px 5px 0px #d9333387"
        w="100%"
        textAlign="center"
        bg="bottomBarBackground"
        position="fixed"
        bottom={0}
      >
        <Box
          w="100px"
          h="100px"
          bg="bottomBarBackground"
          mt="-35px"
          borderRadius="50%"
          boxShadow="0px -2px 5px 0px #d9333387"
          as="button"
          onClick={onOpen}
        >
          <Text color="bottomBarTextColor" fontSize="90px" textAlign="center" mt="-10px">
            +
          </Text>
        </Box>
      </Box>

      {/* Pokemon modal */}
      <PokemonModal {...{ isOpen, onClose, pokedexes, setPokedexes }} />
    </>
  );
};

export default Pokedex;
