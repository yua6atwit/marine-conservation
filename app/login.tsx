
import { Text, styles } from '@/components/Themed';
import { auth } from '@/firebaseConfig';
import { Link, router } from 'expo-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      if (user) router.replace('./(tabs)');
    } catch (error: any) {
      console.log(error)
      alert('Sign in failed: ' + error.message);
    }
  }  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.textInput} placeholder="email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.textInput} placeholder="password" value={password} onChangeText={setPassword} secureTextEntry/>
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.text}>Login </Text>
      </TouchableOpacity>

      <Link href="/register">
        <Text>Register</Text>
      </Link>
    </SafeAreaView>
  )
}


