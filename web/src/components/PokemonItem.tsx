import { Box, Heading, Flex, Image, Text, Spacer, HStack, Progress, ImageProps } from '@chakra-ui/react';

import { levelCalculator } from '../utils/level-calculator';

interface IProps {
  pokemon: IPokemon;
  onClickAddPokedex?: (pokemon: IPokemon) => void;
  onClickRemovePokedex?: (id: string) => void;
}

const PokemonItem = ({ pokemon, onClickAddPokedex, onClickRemovePokedex }: IProps) => {
  const hpLevel = levelCalculator.hp(pokemon.hp || 'none');
  const strengthLevel = levelCalculator.strength(pokemon.attacks);
  const weaknessLevel = levelCalculator.weakness(pokemon.weaknesses);
  const happinessLevel = levelCalculator.happiness(pokemon.attacks, hpLevel, weaknessLevel);

  const onClickPokemonItem = () => {
    onClickAddPokedex && onClickAddPokedex(pokemon);
    onClickRemovePokedex && onClickRemovePokedex(pokemon.id);
  };

  const displayHappiness = () => {
    const happiness: ImageProps[] = [];
    for (let i = 0; i < happinessLevel; i++) {
      happiness.push(<Image src="/icons/cute.png" alt="happiness level" key={i} h="40px" />);
    }
    return happiness;
  };

  return (
    <Box
      mb="15px"
      p="10px"
      bg="cardBackground"
      borderRadius="7px"
      boxShadow="0px 1px 10px 0px #d5d6dc"
      _hover={{ boxShadow: '0px 1px 10px 0px #aeaeae' }}
    >
      <Flex>
        <Flex width="85%">
          <Image
            src={pokemon.imageUrl}
            fallbackSrc="/images/fallback.png"
            alt={`${pokemon.name} card`}
            h="180px"
            borderRadius="5px"
          />

          <Flex flex="1" ml="20px" flexDirection="column">
            <Heading size="lg">{pokemon.name}</Heading>

            {/* display pokemon level */}
            <HStack mt="5px">
              <Text width="30%" size="md">
                HP
              </Text>
              <Progress
                size="lg"
                colorScheme="red"
                bg="levelTubeBackground"
                value={hpLevel}
                borderRadius="20px"
                width="70%"
                boxShadow="0px 0px 3px 0px #D4D4D4"
              />
            </HStack>
            <HStack>
              <Text width="30%" size="md">
                STR
              </Text>
              <Progress
                size="lg"
                colorScheme="red"
                bg="levelTubeBackground"
                value={strengthLevel}
                borderRadius="20px"
                width="70%"
                boxShadow="0px 0px 3px 0px #D4D4D4"
              />
            </HStack>
            <HStack>
              <Text width="30%" size="md">
                WEAK
              </Text>
              <Progress
                size="lg"
                colorScheme="red"
                bg="levelTubeBackground"
                value={weaknessLevel}
                borderRadius="20px"
                width="70%"
                boxShadow="0px 0px 3px 0px #D4D4D4"
              />
            </HStack>

            <Spacer />
            {/* display happiness level */}
            <HStack mt="5px">{displayHappiness()}</HStack>
          </Flex>
        </Flex>

        <Spacer />

        {/* Add button */}
        <Flex wrap="wrap">
          <Box flex="1" textAlign="right">
            <Text as="button" color="colorAddButton" fontSize="25px" onClick={() => onClickPokemonItem()}>
              {onClickAddPokedex ? 'Add' : 'X'}
            </Text>
          </Box>
        </Flex>
      </Flex>

      {/* card modal */}
    </Box>
  );
};

export default PokemonItem;
