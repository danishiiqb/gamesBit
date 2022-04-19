import { View, Text } from 'react-native';
import React from 'react';
import Hero from '../components/Home.js/Hero';
import List from '../components/Home.js/List/List';
import ComingSoon from '../components/Home.js/ComingSoon/ComingSoon';
import { useRef } from 'react';
import { useState } from 'react';
import { Animated } from 'react-native';
import Logo from '../components/Logo';
import { useGlobalContext } from '../context/GlobalContext';
import { Pressable } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Home = ({ navigation }) => {
  const [load, setLoad] = useState(false);
  const { user } = useGlobalContext();
  const scrolling = useRef(new Animated.Value(0)).current;
  const translation = scrolling.interpolate({
    inputRange: [0, 230],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const ids = useRef([
    { name: 'Playstation', id: 13071 },
    { name: 'Nintendo', id: 16257 },
    { name: 'Ubisoft', id: 405 },
    { name: 'EA', id: 109 },
    { name: 'Bethesda', id: 4 },
    { name: 'Naughty Dog', id: 6 },
  ]).current;

  function getModifiedMonth(val, opt = 1, back = 1) {
    const date = new Date();

    const endingMonth = date.getMonth() + opt;
    let startingMonth = endingMonth - val;
    let year = date.getFullYear();
    let startyear = date.getFullYear();
    if (startingMonth <= 0) {
      startingMonth = 12 - -startingMonth;
      startyear = startyear - back;
    }

    return {
      startingMonth: `${startyear}-${`${0}${startingMonth}`.slice(
        -2
      )}-${date.getDate()}`,
      endingMonth: `${year}-${`${0}${endingMonth}`.slice(
        -2
      )}-${date.getDate()}`,
    };
  }

  return (
    <>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 12,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        bounces={false}
        scrollEventThrottle={45}
        style={{ flex: 1, backgroundColor: '#1A002B' }}
      >
        <Hero></Hero>
        <>
          <View style={{ flex: 1, marginTop: 28 }}>
            <List
              text={'Most Popular'}
              index={1}
              months={{ startingMonth: '', endingMonth: '' }}
            ></List>
            <List text={'New Releases'} months={getModifiedMonth(1)}></List>
            <ComingSoon months={getModifiedMonth(5, 9)}></ComingSoon>
            <List
              text={'Top Rated'}
              rating
              index={3}
              months={getModifiedMonth(12, 1, 2)}
            ></List>
            {ids.map((item, idx) => {
              return (
                <List
                  key={idx}
                  text={`Top ${item.name} Games`}
                  consoleGame={item.id}
                  months={{ startingMonth: '', endingMonth: '' }}
                ></List>
              );
            })}
          </View>
        </>
      </Animated.ScrollView>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          shadowOpacity: 1,
          shadowColor: '#13001F',
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 8,
          elevation: 6,
          transform: [
            {
              translateY: translation.interpolate({
                inputRange: [0, 1],
                outputRange: [-400, 0],
              }),
            },
          ],
          paddingLeft: 16,
          paddingRight: 16,
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          height: 87,
          zIndex: 555,
          flexDirection: 'row',
          backgroundColor: '#1A002B',
          opacity: translation,
        }}
      >
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            bottom: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Logo
            style={{
              width: 103,
              height: 24,
            }}
          ></Logo>
          <Pressable
            onPress={() => {
              !user ? navigation.navigate('Login') : signOut(auth);
            }}
          >
            <Text
              style={{
                fontFamily: 'font-bold',
                color: 'white',
              }}
            >
              {!user ? 'Login' : 'Logout'}
            </Text>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
};

export default Home;
