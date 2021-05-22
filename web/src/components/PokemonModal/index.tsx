import { useEffect, useState, SetStateAction } from 'react';
import {
  Flex,
  Box,
  Text,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  useBoolean,
  Spinner,
  Spacer,
} from '@chakra-ui/react';

import { HttpUtil, ROUTE_API } from '../../utils/http-util';

import useDebounce from '../../hooks/useDebounce';

import SearchBar from './SearchBar';
import PokemonModalList from './PokemonModalList';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  pokedexes: IPokemon[];
  setPokedexes: (pokedexes: SetStateAction<IPokemon[]>) => void;
}

const PokemonModal = ({ isOpen, onClose, pokedexes, setPokedexes }: IProps) => {
  const limit = 20;
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [totalCards, setTotalCards] = useState(0);

  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [isLoading, setLoading] = useBoolean();

  const [searchValue, setSearchValue] = useState('');
  const debounceSearchValue = useDebounce(searchValue, 500);

  const getPokemons = async (offset = 0, search = '') => {
    let URI = `${ROUTE_API.cards}?`;
    if (search) URI += `&name=${search}&type=${search}`;
    else URI += `offset=${offset}&limit=${limit}`;

    const response = await HttpUtil.get(URI);

    return response.data;
  };

  useEffect(() => {
    setLoading.on();
    const offset = limit * (page - 1);

    getPokemons(offset, debounceSearchValue)
      .then((response) => {
        const { cards, metadata } = response;
        setPokemons(cards);
        setTotalPage(metadata?.totalPage || 1);
        setTotalCards(metadata?.totalCards);
        setLoading.off();
      })
      .catch((error) => {
        console.log('Getting Pokemon: ', error);
        setLoading.off();
      });
    // eslint-disable-next-line
  }, [page, debounceSearchValue]);

  const gotoPage = (p: number) => {
    setPage(p);
  };

  const onCloseModal = () => {
    setSearchValue('');
    setPage(1);
    onClose();
  };

  return (
    <Modal onClose={onCloseModal} isOpen={isOpen} isCentered scrollBehavior="inside" motionPreset="scale">
      <ModalOverlay bg="modalOutside" />
      <ModalContent maxW={['95%', '90%', '85%', '80%', '60%']} maxH="90%">
        {/* Search pokemon bar */}
        <ModalHeader>
          <SearchBar {...{ setSearchValue }} />
        </ModalHeader>

        {/* display pokemon list */}
        <ModalBody>
          <Box textAlign="center">
            {isLoading && <Spinner textAlign="center" color="bottomBarBackground" size="lg" />}
            {((!isLoading && pokemons?.length === 0) || pokedexes.length === totalCards) && (
              <Text color="bottomBarBackground">No Pokemons are found.</Text>
            )}
          </Box>

          {!isLoading && pokemons.length > 0 && pokedexes.length < totalCards && (
            <PokemonModalList {...{ pokemons, setPokedexes, pokedexes }} />
          )}
        </ModalBody>

        {/* Modal Pagination */}
        {!isLoading && pokemons?.length > 0 && pokedexes.length < totalCards && !debounceSearchValue && (
          <ModalFooter>
            <Flex w="100%">
              {page > 1 && (
                <Box as="button" onClick={() => gotoPage(page - 1)}>
                  <Text>{'< Last'}</Text>
                </Box>
              )}
              <Spacer />
              {page < totalPage && (
                <Box as="button" onClick={() => gotoPage(page + 1)}>
                  <Text>{'Next >'}</Text>
                </Box>
              )}
            </Flex>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PokemonModal;
