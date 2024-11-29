import { hp } from "@/constants/helper";
import { colors } from "@/constants/theme";
import { Pressable, StyleSheet, View } from "react-native";
import { Loading } from "./Loading";
import { Text } from "./Text";

//Define types for props
type ButtonProps = {
    label?: string,
    onPress?: () => void;
    loading?: boolean,
    hasShadow?: boolean,

}

/**
 * Custom pressable button
 * @param label button label
 * @param onPress pressable onPress component
 * @param loading changes loading state
 * @returns styled button
 */
export const Button = ({
    label = 'button',
    onPress,
    loading = false,
    hasShadow = true,
}: ButtonProps ) => {

    const shadowStyle = {
        //set shadow style
        shadowColor: colors().dark,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4
    }

    if (loading) {
        //return loading view
        return(
            <View style ={[styles.button]}>
                <Loading/>
            </View>
        )
    }
    return (
        //apply button style
        <Pressable onPress={onPress}
        style= {[
            {backgroundColor: colors().buttonBackground},
            styles.button,
            hasShadow && shadowStyle
            ]}>
            <Text type='buttonText'>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continuous',
        borderRadius: 15,
    },
})