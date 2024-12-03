import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { RichTextEditor } from '@/components/RichTextEditor';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { Text } from '@/components/Text';
import { hp, wp } from '@/constants/helper';
import { useAuth } from '@/context/authContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { useVideoPlayer, VideoView } from 'expo-video';
import React, { useRef, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function TabTwo() {
  const {user} = useAuth()
  const bodyRef = useRef('')
  const editorRef = useRef('')
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<any>('');

  const onPick = async () => {
    //Launches device library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setFile(result.assets[0]);
    }
  }

  //checks if file is local
  const isLocalFile = (file: any) => {
    if (!file) return null
    if(typeof file == 'object') return true;
  }
  
  //get the file type
  const getFileType = (file: any) => {
    if (!file) return null
    if (isLocalFile(file)){
      return file.type
    }

    //No remote file location yet
    // check image or video for remote file
    if(file.includes('postImage')) return 'image'
    else return 'video'
  }

  //Get the file url
  const getFileUri = (file: any) => {
    if (!file) return null
    if (isLocalFile(file)){
      return file.uri
    }
    
    //No remote file location yet
    // check image or video is a remote file
    //return getFirebaseFileUrl(file)?.uri
  }

  //Create player for video
  const player = useVideoPlayer(getFileUri(file), (player) => {
    player.loop = true;
    player.play();
  });

  //TODO
  const onSubmit = async () => {

  }

  return (
    <ScreenWrapper>
      
      <Header title = 'Create Post'/>

      <View style = {styles.container}>

        <ScrollView contentContainerStyle={{gap:100}}>
          {/* Text editor */}
          <RichTextEditor editorRef = {editorRef} 
          onChange = {(body: string) => bodyRef.current = body}
          />

          {/*Show image or video from photos */}
          {
            file && (
              <View style = {styles.file}> 
                {
                  getFileType(file) == 'video'? (

                    <VideoView 
                      style={{flex:1}} 
                      player={player} 
                      contentFit='cover'
                      nativeControls 
                      allowsFullscreen 
                      allowsPictureInPicture
                    />
                    
                  ): (
                    <Image 
                      source={{uri: getFileUri(file)}} 
                      resizeMode='cover' 
                      style = {{flex: 1}} />
                  )
                }
                {/* video button to delete video */}
                <Pressable style={styles.closeIcon} onPress = {() => setFile(null)}>
                  <Ionicons name="trash-outline" size={22} />
                </Pressable>
              </View>
            )
          }

          {/*Add to Post */}
          <View style = {styles.media}>
            <Text type='heading1'>Add to your post</Text>

            {/* Icons */}
            <View style = {styles.mediaIcons}>
              <TouchableOpacity onPress={() => onPick()}>
                <Ionicons name="image-outline" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* Submit post button */}
        <Button label='Post' 
          loading = {loading}
          onPress = {onSubmit}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: wp(4),
    gap: 15,
  },
  media: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1.5,
    padding: 12,
    paddingHorizontal: 18,
    borderRadius: 15,
    borderCurve: 'continuous',
  },
  mediaIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  file: {
    height: hp(30),
    width:'100%',
    overflow: 'hidden',
    borderRadius: 15,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255, 0.6)'
  }
});