import { BackButton } from '@/components/BackButton';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { KeyboardView } from '@/components/KeyboardView';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { Text } from '@/components/Text';
import { wp } from '@/components/helper';
import { useAuth } from '@/context/authContext';
import { router } from 'expo-router';
import React, { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, View } from 'react-native';

//TODO: add forgot password function
export default function LoginScreen() {
  const {login} = useAuth();
  const [loading, setLoading] = useState(false);
  
  //User input references
  const emailRef= useRef("");
  const passwordRef = useRef("");

  //login button
  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current){
      Alert.alert('Login','Please fill all the fields');
      return;
    }
    //login process
    setLoading(true);
    const response = await login(emailRef.current, passwordRef.current)
    setLoading(false);

    if(!response.success){
      Alert.alert('Login', response.msg);
    }
  }  

  return (
    <ScreenWrapper>
      <KeyboardView>
        <View style = {styles.container}>
          <BackButton onPress = {() => router.replace('/')}/>
          
          {/* Title */}
          <Text type='title'>Login</Text>

          {/* Form */}
          <View style = {styles.form}>
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
            <Text>Forgot password?</Text>
          </View> 

          {/* Login button */}
          <Button label='Login' loading={loading} onPress={handleLogin}/>

          {/* Footer */}
          <View style = {styles.footer}>
            <Text>Don't have an account?</Text>

            {/*Sign up link */}
            <Pressable onPress={() => router.replace('/signup')}>
              <Text type='link'>Sign Up</Text>
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