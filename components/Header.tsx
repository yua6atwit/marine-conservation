import { hp } from "@/components/helper";
import { colors } from "@/constants/theme";
import { StatusBar, StyleSheet, View } from "react-native";
import { BackButton } from "./BackButton";
import { Text } from "./Text";

/**
 * Custom header
 */
export const Header = ({color = colors().background, title, showBackButton = true, onPress}:any) => {
    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <StatusBar backgroundColor={color}/>

            {/*Backbutton */}
            {
                showBackButton && (
                    <View style = {styles.showBackButton}>
                        <BackButton onPress = {onPress}/>
                    </View>
                )
            }
            
            {/* title */}
            <Text type = 'heading3' >{title || ''}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: hp(5),
      gap: 10,
    },
    showBackButton: {
        position: 'absolute',
        left: 0,
    }
  });