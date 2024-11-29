import { hp } from "@/constants/helper";
import { colors } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

type Icon = {
    icon?: 'profile' | 'lock' | 'mail',
}

/**
 * Custom TextInput component
 * 
 * @param icon optional ionicon name, if no icon, an icon will not be displayed
 * @returns styled TextInput 
 */
export const Input = ({icon,...props}: Icon & TextInputProps) => {
    const getIconName = () => {
        //switch case for getting icon names
        switch (icon) {
            case 'profile':
                return "person-outline"; 
            case 'lock':
                return "lock-closed-outline"; 
            case 'mail':
                return "mail-outline";
            default:
                return undefined; 
        }
    };

    return (
        //apply styles
        <View style = {[styles.container, {borderColor: colors().tint}]}>
            {
                <Ionicons 
                name={getIconName()} 
                size={24} 
                color="gray" 
            />
            }
            <TextInput
            style = {{flex:1, fontSize: hp(1.7), fontFamily: 'RedHatDisplay'}}
            placeholderTextColor={colors().placeholderText}
            {...props}
            />
        </View>
    )
} 

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        height: hp(6),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 15,
        borderCurve: 'continuous',
        paddingHorizontal: 18,
        gap: 12
    }
})