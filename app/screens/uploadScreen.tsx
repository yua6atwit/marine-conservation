import { Header } from '@/components/Header';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';


export default function UploadScreen() {
  return (
    <ScreenWrapper>
      <Header title = 'Upload Clean Up' onPress ={() => router.replace('/(tabs)/addScreen')}/>
      <View>
        
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
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});