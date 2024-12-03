import { Button } from '@/components/Button';
import { getUserData, getUsersList } from '@/components/database/UserDB';
import PostsList from '@/components/PostsList';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { Text } from '@/components/Text';
import { hp } from '@/constants/helper';
import { useAuth } from '@/context/authContext';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Home() {
  const {logout, user } = useAuth();
  const userData = getUserData()
  console.log('home got userData', userData?.username)
  console.log('home got user', user.username)

  return (
    <ScreenWrapper>
      <View>
        <Text type='text'>home</Text>
      </View>

      <View>
        <Image 
        style = {{height: hp(4), aspectRatio: 1, borderRadius: 100}}
        source={require('@/assets/images/defaultProfile.png')}
        />
      </View>

      {
        <PostsList users={getUsersList()}/>
      }

      <View style = {{flex:1}}>
        <Button label='Logout' onPress={logout}/>
      </View>

    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: 'black'
  },
});