import { StyleSheet, View } from "react-native";
import { BackButton } from "./BackButton";
import { Text } from "./Text";


export const Header = ({title, showBackButton = true}:any) => {
    return (
        <View style={styles.container}>
            {
                showBackButton && (
                    <View style = {styles.showBackButton}>
                        <BackButton/>
                    </View>
                )
            }
            <Text type = 'heading1' >{title || ''}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      gap: 10,
      marginBottom: 10
    },
    showBackButton: {
        position: 'absolute',
        left: 0,
    }
  });