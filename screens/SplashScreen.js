import React from 'react';
import { Animated, Easing } from 'react-native';
import { Text, ImageBackground, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { enableScreens } from 'react-native-screens';
import Logo from '../components/Logo';
import { Pressable } from 'react-native';

enableScreens();
import { useRef } from 'react';

function SplashScreen({ route, navigation }) {
  const translation = useRef(new Animated.Value(0)).current;

  return (
    <>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode='cover'
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Logo style={{ width: 230, height: 64 }}></Logo>
          <Text
            style={{
              fontSize: 10.5,
              color: 'white',
              fontFamily: 'font-semibold',
            }}
          >
            Discover, explore and keep track of best rated games of all time
          </Text>
        </View>
      </ImageBackground>
      <Pressable
        onPress={() => {
          Animated.timing(translation, {
            toValue: 110,
            duration: 1000,
            easing: Easing.bounce,
            useNativeDriver: true,
          }).start(() => {
            navigation.navigate('Stack');
          });
        }}
        style={({ pressed }) =>
          pressed
            ? {
                shadowOpacity: 1,
                shadowColor: '#13001F',
                shadowOffset: { width: 0, height: 0 },
                shadowRadius: 8,
                elevation: 6,
              }
            : {
                shadowOpacity: 0.7,
                shadowColor: '#13001F',
                shadowOffset: { width: 0, height: 0 },
                shadowRadius: 7,
                elevation: 6,
              }
        }
      >
        <Animated.View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 26,
            width: 55,
            height: 55,
            right: 17,
            borderRadius: '80%',
            backgroundColor: '#1A002B',
            transform: [
              {
                scale: translation.interpolate({
                  inputRange: [0, 110],
                  outputRange: [1, 49],
                }),
              },
            ],
          }}
        >
          <Animated.View
            style={{
              opacity: translation.interpolate({
                inputRange: [0, 110],
                outputRange: [1, 0],
              }),
              transform: [
                {
                  translateX: translation.interpolate({
                    inputRange: [0, 110],
                    outputRange: [0, 300],
                  }),
                },
              ],
            }}
          >
            <Icon name='right' size={24} color='#EFEFEF' />
          </Animated.View>
        </Animated.View>
      </Pressable>
    </>
  );
}

export default SplashScreen;
