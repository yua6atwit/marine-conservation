import { Button } from '@/components/Button';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

//TODO update the UI design
export default function AddScreen() {

  return (
    <ScreenWrapper>
      <View style = {styles.container}>
        <Button label='Post' onPress={() => router.push('/screens/postScreen')}/>
        <Button label='Upload' onPress={() => router.push('/(uploadCleanUp)/uploadScreen')}/>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});