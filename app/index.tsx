import { Button } from '@/components/Button';
import { ScreenWrapper } from '@/components/ScreenWrapper';
import { Text } from '@/components/Text';
import { hp, wp } from '@/constants/helper';
import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, View } from 'react-native';

export default function index() {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style= {styles.container}>
        {/* Welcome image */}
        <Image style={styles.welcomeImage} resizeMode= 'contain' source={require('@/assets/images/abstract-digital-technology-background.png')}/>
        
        {/* title */}
        <View style={{gap: 20}}>
          <Text type='title'>Home Screen</Text>
          <Text type='subtitle'>
            Description: ajsidjo hiwhu dhwaih dwuagdyua guwagd gaywugd
          </Text>
        </View>

        {/**Footer */}
        <View style = {styles.footer}>
          <Button
            label='Getting Started'
            onPress={() => router.push('/signup')}
          />
          <View style = {styles.bottomTextContainer}>
            <Text>Already have an account?</Text>
            
            {/** Login link */}
            <Pressable onPress={() => router.push('/login')}>
              <Text type='link'>Login</Text>
            </Pressable>
            
          </View>
        </View>

      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp(4)
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf:'center',
  },
  footer: {
    gap: 30,
    width: '100%'
  },
  bottomTextContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  }
});

