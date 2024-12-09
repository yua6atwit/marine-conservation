import { AuthContextProvider, useAuth } from '@/context/authContext';
import { useFonts } from 'expo-font';
import { router, Slot, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
import 'react-native-reanimated';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

//ignore warning logs created by RenderHTML from native-react-render-html in-app
LogBox.ignoreLogs([ 'Warning: TNodeChildrenRenderer:',
  'Warning: MemoizedTNodeRenderer:',
  'Warning: TRenderEngineProvider:',
  'Warning: React has detected a change in the order of Hooks'
])


export default function RootLayout() {
  //Add custom fonts
  const [loaded, error] = useFonts({
    'RedHatDisplay': require('../assets/fonts/RedHatDisplay-Regular.ttf'),
    'OpenSans': require('../assets/fonts/OpenSans-ExtraBold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  
  return (
    <AuthContextProvider>
      <RootLayoutNav/>
    </AuthContextProvider>
  )
}

const RootLayoutNav = () => {
  const {isAuthenticated} = useAuth();
  const segments = useSegments();

  useEffect(()=>{
    //check if user is authenticated
    if(typeof isAuthenticated == 'undefined') return;
    const inApp = segments[0] == '(tabs)';

    if(isAuthenticated && !inApp){
      //redirect to home
      router.replace('/(tabs)/home')
    } 
  }, [isAuthenticated])
  return <Slot />
}