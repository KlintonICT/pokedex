import { Suspense, lazy } from 'react';
import { act, render, fireEvent } from '@testing-library/react';

import Fonts from '../themes/Fonts';
import theme from '../themes/theme';
import { ChakraProvider } from '@chakra-ui/react';

const Pokedex = lazy(() => import('../pages/Pokedex'));

const AppComponent = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Suspense fallback={null}>
        <Pokedex />
      </Suspense>
    </ChakraProvider>
  );
};

test('Test opening pokemon modal by clicking + button', async () => {
  const { findByText, getByPlaceholderText } = render(<AppComponent />);
  const addBtn = await findByText('+');
  await act(async () => {
    fireEvent.click(addBtn);
  });

  const input = getByPlaceholderText('Find Pokemon') as HTMLInputElement;
  expect(input.placeholder).toBe('Find Pokemon');
});

test('Test fetching pokemon initial list = 20 pokemons', async () => {
  const { findByText, findAllByText } = render(<AppComponent />);
  const addBtn = await findByText('+');
  await act(async () => {
    fireEvent.click(addBtn);
  });

  const hpLevel = await findAllByText('HP');
  expect(hpLevel.length).toBe(20);
});

test('Test searching pokemon by name', async () => {
  const { findByText, getByPlaceholderText } = render(<AppComponent />);
  const addBtn = await findByText('+');
  await act(async () => {
    fireEvent.click(addBtn);
  });

  const input = getByPlaceholderText('Find Pokemon') as HTMLInputElement;
  await act(async () => {
    fireEvent.change(input, { target: { value: 'Deoxys ex' } });
  });

  const pokemonName = await findByText('Deoxys ex');
  expect(pokemonName.innerText).toBeTruthy;
});
