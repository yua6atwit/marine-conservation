import { hp, wp } from "@/constants/helper";
import { router } from "expo-router";
import moment from "moment";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { RenderHTML } from 'react-native-render-html';
import { Text } from "./Text";

export const PostItem = ({
  item, 
}:any) => {
  const shadowStyles = {
    //set shadow style
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .4,
    shadowRadius: 6,
    elevation: 4
  }

  //Format timestamp
  const today = new Date();
  const date = item.dateUploaded.toDate();
  const dateUploaded = moment(date).format('l')
  const time = moment(date).fromNow(); 

  const openPostPage = () => {
    router.push({pathname: '/PostPage', params: item})
  }

  return (
      
    <View style = {[styles.container, shadowStyles ]}>
      
      <View style={styles.header}>
        {/*User info and post upload date */}
        <View style = {styles.userInfo}>
            
          {/* profile picture TODO: update with user image*/}
          <Image source = {require('@/assets/images/defaultProfile.png')}
          style = {{height: hp(4), width: hp(4)}}
          className='rounded-full'
          />
          <View style = {{gap: 2}}>
            <Text>{item.user.username}</Text>
            <Text type='subtitle'>{dateUploaded}</Text>
          </View>
        </View>

        {/* Upload time on right side*/}
        <View style = {{right: 10}}> 
            <Text type='subtitle'>{time}</Text>
        </View>

      </View>

        
      {/* User post body */}
      <TouchableOpacity onPress={openPostPage}>
        <View style = {styles.content}>

          {/*Render HTML: text body */}
          <View style = {styles.postBody}>
            {
                item?.text && (
                    <RenderHTML
                    contentWidth={wp(100)}
                    source={{html: item.text}}
                    />
                )
            }
          </View>

          {/*TODO Render image or Video */}
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: hp(1),
    gap: hp(1),
    marginBottom: hp(2),
    marginHorizontal: wp(3),
    backgroundColor: 'white',
    borderWidth: .5,
    borderColor: 'gray',
    borderRadius: 15,
    borderCurve: 'continuous'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10
  },
  content: {
    alignItems: 'flex-start',
  },
  postBody: {

  }
});