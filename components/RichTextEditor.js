import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import { Text } from "./Text";

/**
 * 
 * @param editorRef reference to user text input
 * @param onChange function for when text changes
 * @returns Rich text editor
 */
export const RichTextEditor = ({editorRef, onChange}) => {  
    return(
        <View style ={{minHeight: 285}}>
            {/* Text editor tool bar */}
            <RichToolbar
                actions = {[
                    actions.setStrikethrough,
                    actions.setBold,
                    actions.setItalic,
                    actions.insertOrderedList,
                    actions.insertBulletsList,
                    actions.checkboxList,
                    actions.alignLeft,
                    actions.alignCenter,
                    actions.alignRight,
                    actions.heading1,
                    actions.heading4
                ]}

                iconMap ={{
                    [actions.heading1]: ({tintColor}) => <Text style= {{color: tintColor}}>H1</Text>,
                    [actions.heading4]: ({tintColor}) => <Text style= {{color: tintColor}}>H4</Text>
                }}

                style = {[styles.richBar, {backgroundColor: colors().background}, {borderColor: colors().placeholderText}]}
                selectedIconTint = {colors().tint}
                flatContainerStyle = {styles.flatStyle}
                editor = {editorRef}
                disabled = {false}
            />
            {/* Text editor */}
            <RichEditor
                ref={editorRef}
                containerStyle = {styles.rich}
                editorStyle={[{color: colors().text},{placeholderColor: colors().placeholderText}]}
                onChange={onChange}
                placeholder="Enter text here"
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    richBar: {
        borderBottomWidth: 1,
    },
    flatStyle: {
        paddingHorizontal: 8,
        gap: 5,
    },
    rich: {
        minHeight:300,
        flex:1,
        padding: 5,
    },
})