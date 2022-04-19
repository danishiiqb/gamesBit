import { View, Text } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Animated, Easing } from 'react-native';
import Item from './Item';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef } from 'react';
import { ImageBackground } from 'react-native';

let Background = Animated.createAnimatedComponent(ImageBackground);

const Hero = ({}) => {
  const [backImg, setBackgroundImage] = useState('');
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const translation = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const changed = ({ viewableItems, changed }) => {
    if (viewableItems[0]?.item?.background_image) {
      setBackgroundImage(viewableItems[0]?.item?.background_image);
      setLoad(false);
    }
  };

  useEffect(() => {
    if (load) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.in(Easing.linear),
          useNativeDriver: true,
        }).start(),
        Animated.timing(translation, {
          toValue: 110,
          duration: 700,
          easing: Easing.in(Easing.linear),
          useNativeDriver: true,
        }).start(),
      ]);
    } else {
      opacity.setValue(0);
      translation.setValue(0);
    }
  }, [load]);

  const viewabilityConfigCallbackPairs = useRef([
    {
      onViewableItemsChanged: changed,
      viewabilityConfig: {
        itemVisiblePercentThreshold: 40,
      },
    },
  ]);

  function getModifiedMonth() {
    const date = new Date();
    const endingMonth = date.getMonth() + 1;
    let startingMonth = endingMonth - 2;
    if (startingMonth < 0) {
      startingMonth = 10 - startingMonth;
    }
    if (startingMonth === 0) {
      startingMonth = 12;
    }
    return {
      startingMonth: `${date.getFullYear()}-${`${0}${startingMonth}`.slice(
        -2
      )}-${date.getDate()}`,
      endingMonth: `${date.getFullYear()}-${`${0}${endingMonth}`.slice(
        -2
      )}-${date.getDate()}`,
    };
  }

  useEffect(() => {
    async function getData() {
      let { startingMonth, endingMonth } = getModifiedMonth();
      let gamesData = await (
        await fetch(
          `https://api.rawg.io/api/games?key=b4b44fe4937c40fe97bf7de6fb2d4c96&dates=${startingMonth},${endingMonth}&platforms=18,1,7`
        )
      ).json();
      let limitedData = gamesData.results.slice(0, 4);
      setData([...limitedData]);
    }
    getData();
  }, []);

  return (
    <View style={{ position: 'relative', flex: 1 }}>
      {data ? (
        <>
          <Animated.View
            style={{
              position: 'absolute',
              width: '100%',
              height: 470,
              opacity: translation.interpolate({
                inputRange: [0, 110],
                outputRange: [0.25, 0.5],
              }),
            }}
          >
            <LinearGradient
              start={[1, 0.6]}
              end={[1, 1]}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 56,
              }}
              colors={['transparent', 'rgba(26,0,43,1)']}
            ></LinearGradient>
            {backImg ? (
              <Background
                blurRadius={45}
                onLoadEnd={() => {
                  setLoad(true);
                }}
                imageStyle={{
                  resizeMode: 'cover',
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  opacity: opacity,
                }}
                source={{ uri: backImg }}
              ></Background>
            ) : null}
          </Animated.View>
          <View style={{ marginTop: 39 }}>
            {data.length > 0 && (
              <FlatList
                maxToRenderPerBatch={2}
                data={data}
                viewabilityConfigCallbackPairs={
                  viewabilityConfigCallbackPairs.current
                }
                decelerationRate='fast'
                snapToInterval={350 + 15}
                contentContainerStyle={{ padding: 17 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  return <Item item={item} index={index} />;
                }}
                keyExtractor={(item, idx) => {
                  return item.id;
                }}
              ></FlatList>
            )}
          </View>
        </>
      ) : null}
    </View>
  );
};

export default Hero;
