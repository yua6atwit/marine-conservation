//Applications Main Screen
import { styles } from '@/components/Themed';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function index() {

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
      <Link href="/login">
        Login/Register
      </Link>
    </View>
  )
}

