import { Suspense, lazy } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Fonts from './themes/Fonts';
import theme from './themes/theme';

const Pokedex = lazy(() => import('./pages/Pokedex'));

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Suspense fallback={null}>
        <Pokedex />
      </Suspense>
    </ChakraProvider>
  );
};

export default App;
