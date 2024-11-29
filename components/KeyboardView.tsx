import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const ios = Platform.OS == 'ios';

/**
 * Custom keyboard view
 */
export const KeyboardView = ({children}:any) => {
    return(
        //Apply styles
        <KeyboardAvoidingView
            behavior={ios ? 'padding' : 'height'}
            style = {{flex: 1}}
        >
            <ScrollView
                style = {{flex: 1}}
                bounces = {false}
                showsVerticalScrollIndicator = {false}
            >
                {
                    children
                }
            </ScrollView>
        </KeyboardAvoidingView>
    )
}