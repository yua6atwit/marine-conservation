import { hp } from "@/constants/helper";
import { router } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "./Text";

export const PostItem = ({noborder, item, index}:any) => {

    const openPostPage = () => {
        router.push({pathname: '/PostPage', params: item})
    }

    return (
        <TouchableOpacity 
            onPress={openPostPage}
            style={[{borderBottomWidth: (noborder? 0 : 1) },styles.container]}
        >
            <View style={{paddingHorizontal: 5}}>
        
                {/*User bar */}
                <View style = {styles.userBar}>
                    
                    {/* profile picture, name on left side*/}
                    <Image source = {require('@/assets/images/defaultProfile.png')}
                    style = {{height: hp(3), width: hp(3)}}
                    className='rounded-full'
                    />
                    <Text>{item.username}</Text>
                
                    {/* time on right side*/}
                    <Text type='subtitle'>time</Text>
                </View>
                
                {/* User post */}
                <Text type='subtitle'>Post</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: hp(8),
      marginHorizontal: 4,
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