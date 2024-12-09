import { hp, wp } from "@/constants/helper";
import { colors } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Text } from "./Text";

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

type InputProps = {
    label: string
    borderBottom? : boolean
}

/**
 * Custom TextInput component
 * 
 * @returns styled TextInput for forms
 */
export const InputUnderline = ({label,...props}: InputProps & TextInputProps) => {
    
    return (
        //apply styles
        <View style = {[styles.underlineContainer, {backgroundColor: colors().background}]}>
            <View style ={styles.underline}> 
            <Text type= 'heading4'>{label}</Text>
            <TextInput
            style = {{flex:1, fontSize: hp(2), fontFamily: 'RedHatDisplay'}}
            placeholderTextColor={colors().placeholderText}
            placeholder='Enter here'
            {...props}
            />
            </View>
        </View>
    )
} 


/**
 * Custom TextInput component
 * 
 * @returns styled TextInput for forms
 */
export const InputDebris = ({label, borderBottom = false,...props}: InputProps & TextInputProps) => {
    
    return (
        //apply styles
        <View style = {[styles.itemContainer,
            {backgroundColor: colors().background, 
             borderBottomWidth: borderBottom? 0.5 : 0   
            }]}>
            <View style = {{maxWidth: '70%'}}>
                <Text type= 'heading4'>{label}</Text>
            </View>
            <View style ={[styles.inputBox, {backgroundColor: colors().background} ]}> 
                <TextInput
                style = {{flex:1, fontSize: hp(2), fontFamily: 'RedHatDisplay'}}
                placeholderTextColor={colors().placeholderText}
                placeholder='0'
                keyboardType= "number-pad"
                {...props}
                />
            </View>
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
    },
    underlineContainer: {
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: 15,
        borderWidth: .5,
        borderCurve: 'continuous',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: .5,
        gap: 12
    },
    underline: {
        gap: 15,
        borderBottomWidth: 1,
    },
    inputBox: {
        borderWidth: .5,
        borderRadius: 5,
        borderCurve: 'continuous',
        alignItems: 'center',
        minWidth: wp(10),
        maxWidth: '30%',
        height: hp(3),
        marginRight: wp(2),
        paddingHorizontal: hp(1)
    }
})