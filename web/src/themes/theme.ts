import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Gaegu',
    body: 'Atma',
  },
  colors: {
    cardBoxShadow: '#d5d6dc',
    cardBoxShadowHover: '#aeaeae',
    cardBackground: '#f3f4f7',
    colorAddButton: '#dc7777',
    levelTubeBackground: '#e4e4e4',
    levelTubeBoxShadow: '#d4d4d4',
    levelTubeValueBackground: '#f3701a',
    bottomBarBackground: '#ec5656',
    bottomBarBoxShadow: '#d9333387',
    bottomBarTextColor: '#ffffff',
    modalOutside: '#000000a3',
    modelContentBoxShadow: '#474444',
    modalContentBackground: '#ffffff',
    searchBoxBorder: '#e6e6e6',

    // pokemon type color
    psychic: '#f8a5c2',
    fighting: '#f0932b',
    fairy: '#c44569',
    normal: '#f6e58d',
    grass: '#badc58',
    metal: '#95afc0',
    water: '#3dc1d3',
    lightning: '#f9ca24',
    darkness: '#574b90',
    colorless: '#FFF',
    fire: '#eb4d4b',
  },
});

export default theme;
