import { BackButton } from '@/components/BackButton';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { KeyboardView } from '@/components/KeyboardView';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { Text } from '@/components/Text';
import { wp } from '@/constants/helper';
import { useAuth } from '@/context/authContext';
import { router } from 'expo-router';
import React, { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, View } from 'react-native';

export default function signUpScreen() {
  const {signup} = useAuth();
  const [loading, setLoading] = useState(false);

  //User input references
  const usernameRef= useRef("");
  const emailRef= useRef("");
  const passwordRef = useRef("");

  const handleSignUp = async () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current ){
      Alert.alert('Sign up','Please fill in all the fields');
      return;
    }

    //signup process
    setLoading(true);
    let response = await signup(emailRef.current, passwordRef.current, usernameRef.current)
    setLoading(false);

    console.log('Signup response', response)

    if (!response.success){
      Alert.alert('Sign Up', response.msg)
    }
    
  }

  return (
    <ScreenWrapper>
      <KeyboardView>
        <View style = {styles.container}>
          <BackButton onPress = {() => router.replace('/')}/>
          
          {/* Title */}
          <Text type='title'>Sign Up</Text>

          {/* Form */}
          <View style = {styles.form}>
              <Input 
                icon='profile'
                placeholder='Enter your username' 
                onChangeText={value => usernameRef.current = value}
              />
              <Input 
                icon='mail'
                placeholder='Enter your email' 
                onChangeText={value => emailRef.current = value}
              />
              <Input 
                icon='lock'
                placeholder='Enter your password' 
                onChangeText={value => passwordRef.current = value}
                secureTextEntry
              />
            </View>

            {/* Button */}
            <Button label='Sign up' loading={loading} onPress={handleSignUp}/>

            {/* Footer */}
            <View style = {styles.footer}>
              <Text>Already have an account?</Text>
              {/* Login Link */}
              <Pressable onPress={() => router.replace('/login')}>
                <Text type='link'>Login</Text>
              </Pressable>
            </View>

        </View>
      </KeyboardView>
    </ScreenWrapper>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5)
  },
  form: {
    gap: 20
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  }
});