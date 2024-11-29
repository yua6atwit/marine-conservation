import React from 'react';

/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

//Brand colors
//soft orange #F89B5C
//Redish-orange #F26200
//dark teal #0C3C54
//bright green-blue #00CC99
//slightly dark teal #1D697B
//tan #E8D8B1
//lighter teal #59C1B4
//teal #4AA5BB
//lighter tan #F4F2D8

const tintColorLight = '#4AA5BB';
const tintColorDark = '#F4F2D8';
const link = '#1D697B';
const button = '#1D697B'; 


const Colors = {
  light: {
    text: '#000',
    title: 'black',
    placeholderText: 'gray',
    dark: '#1D697B',
    background: 'white',
    secondaryBackground: '#F4F2D8',
    buttonBackground: button,
    link: link,
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    buttonText: 'white',
  },
  //Dark theme is not set
  dark: {
    text: 'white',
    background: 'black',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

// Create a context to manage and provide theme information across the application.
// Default theme is set to light.
const ThemeContext = React.createContext({
  isDark: false, 
  colors: Colors.light, 
  setScheme: () => {},
});


/**
 * Custom hook that allows components to access the current theme context.
 */
export const useTheme = () => React.useContext(ThemeContext);

/**
 * 
 * @returns colors of current theme
 */
export const colors = () => {
  const palet = useTheme().colors;
  return palet
}
