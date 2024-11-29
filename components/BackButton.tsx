import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';


/**
 * Custom back button
 */
export const BackButton = () => {
    const router = useRouter();
    return (
        //apply style
        <Pressable onPress={()=> router.back() } style = {styles.button}>
            <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
      alignSelf: 'flex-start',
      padding: 5,
    },

});
  
  