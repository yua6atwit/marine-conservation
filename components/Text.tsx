import { hp } from '@/constants/helper';
import { colors } from '@/constants/theme';
import { Text as DefaultText, StyleSheet, type TextProps } from 'react-native';

// Creates text props
// Optional 'type' property to determine the text style
export type ThemedTextProps = TextProps & {
  type?: 'title' | 'subtitle' | 'text' | 'link' | 'buttonText'; 
};

/**
 * Custom Text component for different text styles
 * 
 * @param type - The type of text determines the style to apply.
 * @returns Styled text component
 */
export const Text = ({
    type = 'text', 
    ...textProps 
}: ThemedTextProps) => {
  return (
    <DefaultText
      style={[
        //Apply text styles
        {color: colors().text},
        type === 'title' ? styles.title : undefined, 
        type === 'subtitle' ? styles.subtitle : undefined, 
        type === 'text' ? styles.text : undefined, 
        type === 'buttonText' ? [{color: colors().buttonText}, styles.buttonText] : undefined, 
        type === 'link' ? [{color: colors().link}, styles.link] : undefined, 
      ]}
      {...textProps} 
    />
  );
};

// Static styles for text types
// **Fonts are static**: The font family, weight, and style are predefined for each type and should not change dynamically.
const styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans',
    fontSize: hp(4), 
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'RedHatDisplay', 
    fontSize: hp(2), 
    textAlign: 'center',
  },
  text: {
    fontFamily: 'RedHatDisplay', 
    fontSize: hp(1.8),
    
  },
  buttonText: {
    fontFamily: 'RedHatDisplay', 
    fontSize: hp(2.8), 
  },
  link: {
    fontFamily: 'RedHatDisplay', 
    fontSize: hp(1.8), 
    textDecorationLine: 'underline' 
  },
});