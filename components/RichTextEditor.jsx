import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import { Text } from "./Text";
export const RichTextEditor = ({editorRef, onChange}) => {
    
    return(
        <View style ={{minHeight: 285}}>
            <RichToolbar
            actions = {[
                actions.setStrikethrough,
                actions.setBold,
                actions.setItalic,
                actions.insertOrderedList,
                actions.blockquote,
                actions.alignLeft,
                actions.alignCenter,
                actions.alignRight,
                actions.code,
                actions.line,
                actions.heading1,
                actions.heading4
            ]}
            iconMap ={{
                [actions.heading1]: ({tintColor}) => <Text style= {{color: tintColor}}>H1</Text>,
                [actions.heading4]: ({tintColor}) => <Text style= {{color: tintColor}}>H4</Text>
            }}
            style = {[styles.richBar, {backgroundColor: 'white'}, {borderColor: 'gray'}]}
            selectedIconTint = {colors().tint}
            flatContainerStyle = {styles.flatStyle}
            editor = {editorRef}
            disabled = {false}
            />
            <RichEditor
            ref={editorRef}
            containerStyle = {styles.rich}
            editorStyle={[{color: colors().text}, {placeholderColor: 'gray'}]}
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
        padding: 5
    },
})