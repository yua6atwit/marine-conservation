import React from 'react';

/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

//Brand colors
//soft orange #F89B5C
//orange #FF9933
//darker red-orange #F26200
//lighter red-orange #D96C4F

//darkest #10282A
//dark teal #0C3C54
//slightly dark teal #1D697B

//bright green-blue #00CC99
//green-blue #59C1B4 

//dark blue #082347
//blue #4AA5BB
//bright blue #0099FF

//dark tan #DDC489
//tan #E8D8B1
//lighter tan #F4F2D8

//slightly darker yellow #EDC421
//yellow #FFDE59

const tintColorLight = '#4AA5BB';
const tintColorDark = '#F4F2D8';
const link = '#1D697B';
const button = '#1D697B'; 


const Colors = {
  light: {
    text: '#000',
    title: 'black',
    placeholderText: 'gray',
    dark: '#10282A',
    background: 'white',
    secondaryBackground: '#E8D8B1',
    buttonBackground1: button,
    buttonBackground2: '#D96C4F',
    link: link,
    header: '#FFDE59',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    buttonText: 'white',
  },
  //Dark theme is not implemented
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
