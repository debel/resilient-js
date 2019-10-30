import React from 'react';
import {
  CodePane,
  Deck,
  Heading,
  List as SpectacleList,
  Slide,
  Text as SpectacleText,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('prismjs/themes/prism-funky.css');
require('./overrides.css');

const theme = createTheme(
  {
    primary: '#212121',
    secondary: '#FF8A65',
    tertiary: '#F0F4C3',
    quartenary: 'white',
  },
  {
    primary: 'Montserrat',
    secondary: 'Verdana',
  }
);

const Title = ({ children, secondary, bigger, ...otherProps }) => (
  <Heading {...otherProps} size={bigger ? 1 : 4} textColor={secondary ? "secondary" : "tertiary"}>{children}</Heading>
);

const List = ({ center, children }) => (
  <SpectacleList textAlign={center ? 'left' : 'center'} style={{ listStyle:"none" }}>
    {children}
  </SpectacleList>
);

const CodeSlide = React.forwardRef(({ id, title = "404 Missing Slide", source, comment, ...otherProps }, ref) => (
  <Slide {...otherProps} ref={ref}  id={id}>
    <Title>{title}</Title>
    <div>{comment}</div>
    <CodePane textSize={20} lang="js" theme="external" source={source} />
  </Slide>
));

const CodeJS = ({ src, lang }) => (
  <CodePane textSize={20} lang={lang || 'js'} theme="external" source={src} />
);

const Accent = ({ children }) => (
  <span style={{ color:theme.screen.colors.tertiary }}>
    {children}
  </span>
)

const ThemedDeck = ({ children }) => (
  <Deck theme={theme} progress="bar">
    {children}
  </Deck>
);

const Text = ({ children, ...otherProps }) => (
  <SpectacleText {...otherProps} style={{ color: '#FF8A65' }}>
    {children}
  </SpectacleText>
);

export { Accent, List, CodeSlide, Title, ThemedDeck, Text, CodeJS };
