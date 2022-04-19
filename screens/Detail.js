import { View, Text, Image, Animated, Dimensions } from 'react-native';
import React from 'react';
import { SharedElement } from 'react-native-shared-element';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native';
import BackBtn from '../components/BackBtn';
import { useEffect } from 'react';
import { useRef } from 'react';
import DetList from '../components/Detail/DetList';
import MetaSection from '../components/Detail/MetaSection';
import { useState } from 'react';
import BackgroundGradient from '../components/BackgroundGradient';
import Liked from '../components/Detail/Liked';
import Collect from '../components/Detail/Collect';
import { useLikedContext } from '../context/LikedContext';
import Logo from '../components/Logo';
import { useGlobalContext } from '../context/GlobalContext';
import Info from '../components/Detail/Info';
import TopInfo from '../components/Detail/TopInfo';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
const { width } = Dimensions.get('window');

const Detail = ({ route, navigation }) => {
  const scrolling = useRef(new Animated.Value(0)).current;
  const translation = scrolling.interpolate({
    inputRange: [0, 330],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const { user } = useGlobalContext();
  const item = route.params;
  const [data, setData] = useState(null);
  const genres = useRef(item.genres.slice(0, 3)).current;
  const { likesDoc, collectionDoc } = useLikedContext();

  useEffect(() => {
    async function getData() {
      let gamesData = await (
        await fetch(
          `https://api.rawg.io/api/games/${item.id}?key=b4b44fe4937c40fe97bf7de6fb2d4c96`
        )
      ).json();
      let dataGame = gamesData;
      setData(dataGame);
    }
    getData();
  }, [item.id]);

  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        backgroundColor: '#1A002B',
      }}
    >
      <Animated.ScrollView
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
        contentContainerStyle={{
          paddingBottom: 80,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <BackgroundGradient
          height={567}
          image={item.background_image}
        ></BackgroundGradient>
        <SharedElement
          style={{
            width: '100%',
            height: 370,
          }}
          id={item.id}
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 5,
              backgroundColor: '#2a0045',
              resizeMode: 'cover',
            }}
            source={{
              uri: item.background_image,
            }}
          ></Image>
        </SharedElement>
        <View
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            marginTop: 20,
          }}
        >
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                width: '85%',
                color: 'white',
                fontFamily: 'font-semibold',
                lineHeight: 30.6,
                fontSize: 27,
              }}
            >
              {item.name}
            </Text>
            {data ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Liked likesDoc={likesDoc} vals={data}></Liked>
                <Collect collectionDoc={collectionDoc} vals={data}></Collect>
              </View>
            ) : null}
          </View>
          <TopInfo genres={genres} item={item}></TopInfo>
          <View
            style={{
              marginTop: 16,
              width: '100%',
            }}
          >
            <DetList items={item.platforms}></DetList>
            <MetaSection items={item.metacritic || 45}></MetaSection>
          </View>
          <Info data={data} item={item}></Info>
        </View>
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <BackBtn
              style={{
                position: 'relative',
                marginRight: 4,
                top: 0,
                left: 0,
              }}
            ></BackBtn>
            <Logo
              style={{
                width: 103,
                height: 24,
              }}
            ></Logo>
          </View>

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
    </View>
  );
};

export default Detail;
