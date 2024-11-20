import { styles } from '@/components/Themed';
import { auth } from '@/firebaseConfig';
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TabOneScreen() {

  getAuth().onAuthStateChanged((user) => {
    if (!user) router.replace("/login");
  });

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Sign Out</Text>
      <TouchableOpacity style={styles.button} onPress={() => auth.signOut()}>
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
