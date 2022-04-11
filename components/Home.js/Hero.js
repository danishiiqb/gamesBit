import { View, Text } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback } from 'react';
import { useRef } from 'react';
import { ImageBackground } from 'react-native';

const Hero = () => {
  const [backImg, setBackgroundImage] = useState('');
  const [data, setData] = useState([]);
  const changed = ({ viewableItems, changed }) => {
    viewableItems[0]?.item?.background_image &&
      setBackgroundImage(viewableItems[0]?.item?.background_image);
  };
  const viewabilityConfigCallbackPairs = useRef([
    {
      onViewableItemsChanged: changed,
      viewabilityConfig: {
        itemVisiblePercentThreshold: 90,
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
      let limitedData = gamesData.results.slice(0, 56);
      setData([...limitedData]);
    }
    getData();
  }, []);

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: 490,
          opacity: 0.26,
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
        <ImageBackground
          blurRadius={45}
          resizeMethod='cover'
          style={{
            width: '100%',
            height: '100%',
          }}
          source={{ uri: backImg }}
        ></ImageBackground>
      </View>
      <View style={{ marginTop: 37 }}>
        {data.length > 0 && (
          <FlatList
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
    </View>
  );
};

export default Hero;
