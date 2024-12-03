import { Header } from "@/components/Header";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { hp } from "@/constants/helper";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";


export default function PostPage() {
    const item = useLocalSearchParams();

    return(
        <ScreenWrapper>
            <Header title = {item.username}/>
            <View>
            </View>
        </ScreenWrapper>
    )
}   

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: hp(4),
      borderBottomWidth: 2,
      paddingBottom: 4,
      borderColor: 'lightgray'
    },
    userBar: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        gap: 10
    },
});