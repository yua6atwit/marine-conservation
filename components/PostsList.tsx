import React from "react";
import { FlatList, View } from "react-native";
import { PostItem } from "./PostItem";

export default function PostsList({users}: any) {
    return (
        <View style={{flex:1}}>
            <FlatList
                data = {users}
                contentContainerStyle = {{flex: 1, paddingVertical: 25}}
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item, index}) => 
                    <PostItem 
                        noborder = {index+1 == users.length}
                        item = {item} index = {index} />}
            />
        </View>
    )
}