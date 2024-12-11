import { hp } from '@/constants/helper';
import { colors } from '@/constants/theme';
import { Text as DefaultText, StyleSheet, type TextProps } from 'react-native';

// Creates text props
// Optional 'type' property to determine the text style
export type ThemedTextProps = TextProps & {
  type?: 'title' | 'heading1' | 'heading3' | 'heading4' | 'text' | 'subtitle' | 'link' | 'buttonText'; 
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
        type === 'heading1' ? styles.heading1 : undefined, 
        type === 'heading3' ? styles.heading3 : undefined,
        type === 'heading4' ? styles.heading4 : undefined,
        type === 'text' ? styles.text : undefined, 
        type === 'subtitle' ?[{color: colors().placeholderText}, styles.subtitle]  : undefined, 
        type === 'buttonText' ? [{color: colors().buttonText}, styles.buttonText] : undefined, 
        type === 'link' ? [{color: colors().link}, styles.link] : undefined, 
      ]}
      {...textProps} 
    />
  );
};

// Static styles for text types
// **Fonts are static**: The font family, weight, and style are predefined for each type and should not change dynamically.
// see assets for fonts 
const styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans',
    fontSize: hp(4), 
    textAlign: 'center',
  },
  heading1: {
    fontFamily: 'RedHatDisplay', 
    fontSize: hp(3), 
  },
  heading3: {
    fontFamily: 'RedHatDisplay',
    fontSize: hp(2.5), 
    textAlign: 'center',
  },
  heading4: {
    fontFamily: 'RedHatDisplay', 
    fontSize: hp(2), 
  },
  text: {
    fontFamily: 'RedHatDisplay', 
    fontSize: hp(1.8),
  },
  subtitle: {
    fontFamily: 'RedHatDisplay', 
    fontSize: hp(1.6),
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
