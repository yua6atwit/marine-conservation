import { Button } from '@/components/Button';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { Text } from '@/components/Text';
import { useAuth } from '@/context/authContext';
import { StyleSheet, View } from 'react-native';

export default function Profile() {
  const {logout, user } = useAuth();
  return (
    <ScreenWrapper>
      <Text type='heading1'>{user.username}</Text>

      <View style = {{flex:1}}>
        <Button label='Logout' onPress={logout}/>
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