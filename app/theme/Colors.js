import { DarkTheme, DefaultTheme } from '@react-navigation/native';
const colors = {
  transparent: 'transparent',
  white: 'white',
  black: 'black',
  blackShade25: '#252729',
  blueShade44: '#4465AC',

  lightTheme: {
    ...DefaultTheme,
    mainBackground: '#E5E5E5',
    background: '#FFFFFF',
    primary: '#FF8252',
    primaryLight: '#FFA785',
    primaryOpacity10: 'rgba(255, 130, 82, 0.1)',
    primaryOpacity60: 'rgba(255, 130, 82, 0.6)',
    textPrimary: '#252729',
    textPlaceholder: 'rgba(107, 110, 115, 0.6)',
    textInputBG: 'rgba(184, 185, 187, 0.1)',
    shadow: '#645757',
    inactive: '#B8B9BB',
    border: 'rgba(37, 39, 41, 0.1)',
  },
  darkTheme: {
    ...DarkTheme,
    mainBackground: '#252729',
    background: '#252729',
    primary: '#00AF9C',
    primaryLight: '#00AF9C',
    primaryOpacity10: 'rgba(0, 175, 155, 0.1)',
    primaryOpacity60: 'rgba(0, 175, 155, 0.6)',
    textPrimary: '#FFFFFF',
    textPlaceholder: 'rgba(107, 110, 115, 0.6)',
    textInputBG: 'rgba(184, 185, 187, 0.1)',
    shadow: '#645757',
    inactive: '#B8B9BB',
    border: 'rgba(255, 255, 255, 0.1)',
  },
};

export default colors;
