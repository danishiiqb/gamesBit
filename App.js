import { useFonts } from 'expo-font';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  let [fontsLoad] = useFonts({
    'font-bold': require('./assets/fonts/Fontspring-bold.otf'),
    'font-extrabold': require('./assets/fonts/Fontspring-extrabold.otf'),
    'font-heavy': require('./assets/fonts/Fontspring-heavy.otf'),
    'font-medium': require('./assets/fonts/Fontspring-medium.otf'),
    'font-regular': require('./assets/fonts/Fontspring-regular.otf'),
    'font-semibold': require('./assets/fonts/Fontspring-semibold.otf'),
  });

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}
        >
          <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
          ></Stack.Screen>
          <Stack.Screen name='Home' component={Home}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
