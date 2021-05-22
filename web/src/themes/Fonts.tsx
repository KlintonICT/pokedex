import { Global } from '@emotion/react';

const Fonts = () => {
  return (
    <Global
      styles={`
          /* Atma */
          @font-face {
            font-family: 'Atma';
            src: url('./fonts/Atma/Atma-Bold.ttf');
          }
          /* latin */
          @font-face {
            font-family: 'Gaegu';
            src: url('./fonts/Gaegu/Gaegu-Regular.ttf');
          }
        `}
    />
  );
};

export default Fonts;
