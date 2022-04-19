import { useFonts } from 'expo-font';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Foundation';
import Icons2 from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import ShowAll from './screens/ShowAll';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalContextProvider } from './context/GlobalContext';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import DetailWrapper from './screens/DetailWrapper';
import ProfileWrapper from './screens/ProfileWrapper';
import CollectionWrapper from './screens/CollectionWrapper';

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  let [fontsLoad] = useFonts({
    'font-bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'font-extrabold': require('./assets/fonts/LeagueSpartan-ExtraBold.ttf'),
    'font-heavy': require('./assets/fonts/LeagueSpartan-Black.ttf'),
    'font-medium': require('./assets/fonts/LeagueSpartan-Medium.ttf'),
    'font-regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
    'font-semibold': require('./assets/fonts/LeagueSpartan-SemiBold.ttf'),
  });

  function Stacks() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        <Stack.Screen name='HomePage' component={Home}></Stack.Screen>
        <Stack.Screen name='Detail' component={DetailWrapper}></Stack.Screen>
        <Stack.Screen name='ShowAll' component={ShowAll}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
      </Stack.Navigator>
    );
  }

  if (!fontsLoad) {
    return null;
  }
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
            title: '',
            tabBarStyle: {
              shadowOpacity: 1,
              shadowColor: '#13001F',
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 8,
              elevation: 6,
              backgroundColor: '#1A002B',
              borderTopWidth: 0,
              paddingTop: 18,
              position: 'absolute',
              bottom: -13,
              height: 83,
            },
          }}
        >
          <Tab.Screen
            options={{
              tabBarButton: () => {
                return null;
              },
              tabBarStyle: {
                display: 'none',
              },
            }}
            name='Splash'
            component={SplashScreen}
          ></Tab.Screen>
          <Tab.Screen
            name='Home'
            options={{
              tabBarIcon: ({ focused }) => (
                <Icons
                  name='home'
                  color={focused ? '#bfbfbf' : 'white'}
                  size={21}
                />
              ),
            }}
            component={Stacks}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <Icons2
                  name='user'
                  color={focused ? '#bfbfbf' : 'white'}
                  size={21}
                />
              ),
            }}
            name='Profile'
            component={ProfileWrapper}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <Icons
                  name='list'
                  color={focused ? '#bfbfbf' : 'white'}
                  size={21}
                />
              ),
            }}
            name='List'
            component={CollectionWrapper}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}
