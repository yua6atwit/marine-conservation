
import { Text, styles } from '@/components/Themed';
import { auth } from '@/firebaseConfig';
import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      if (user) 
        router.replace('/(tabs)');
    } catch (error: any) {
      console.log(error)
      alert('Sign in failed: ' + error.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.textInput} placeholder="email" value={email} onChangeText={setEmail}  />
      <TextInput style={styles.textInput} placeholder="password" value={password} onChangeText={setPassword} secureTextEntry/>
      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.text}>Register </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
