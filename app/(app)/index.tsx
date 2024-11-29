import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { useAuth } from '@/context/authContext';
import { StyleSheet, View } from 'react-native';

export default function Home() {
  const {logout} = useAuth();

  return (
    <View>
      <Text type='text'>home</Text>
      <Button label='Logout' onPress={logout}/>
    </View>
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