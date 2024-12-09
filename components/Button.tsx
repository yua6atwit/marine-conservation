import { hp } from "@/constants/helper";
import { colors } from "@/constants/theme";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Loading } from "./Loading";
import { Text } from "./Text";

//Define types for props
type ButtonProps = {
    type?: 'default' | 'light'
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
    type = 'default',
    label = 'button',
    onPress,
    loading = false,
    hasShadow = true,
}: ButtonProps ) => {

    const shadowStyle = {
        //set shadow style
        shadowColor: colors().dark,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
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
        <TouchableOpacity onPress={onPress}
        style= {[
            type === 'default' ? [
                {backgroundColor: colors().buttonBackground1},
                styles.button,
                hasShadow && shadowStyle
            ]: undefined ,
            type === 'light' ? [
                {backgroundColor: colors().buttonBackground2},
                styles.button,
                hasShadow && shadowStyle
            ]: undefined ,

            ]}>

            <Text type='buttonText'>{label}</Text>

        </TouchableOpacity>
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