import { SetStateAction } from 'react';
import { Input, Image, Heading, InputGroup, InputRightElement } from '@chakra-ui/react';

interface IProps {
  setSearchValue: (searchValue: SetStateAction<string>) => void;
}

const SearchBar = ({ setSearchValue }: IProps) => {
  return (
    <Heading>
      <InputGroup borderColor="searchBoxBorder">
        <Input
          focusBorderColor="searchBoxBorder"
          placeholder="Find Pokemon"
          fontSize="20px"
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <InputRightElement>
          <Image src="/icons/search.png" boxSize="35px" alt="search icon" />
        </InputRightElement>
      </InputGroup>
    </Heading>
  );
};

export default SearchBar;
