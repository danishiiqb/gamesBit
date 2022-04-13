import { View, Text, Image } from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur';

const ItemSoon = ({ expanded, item, idx }) => {
  return (
    <View
      style={[
        {
          shadowOpacity: 0.6,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 3,
          elevation: 6,
          position: 'relative',
        },
        expanded
          ? {
              paddingRight: 6,
              width: '40%',
              height: '100%',
            }
          : {
              width: '50%',
              height: '50%',
              paddingLeft: idx % 2 === 0 ? 6 : 0,
              paddingBottom: idx === 1 || idx == 2 ? 6 : 0,
            },
      ]}
    >
      <BlurView
        intensity={89}
        tint='dark'
        style={{
          zIndex: 3,
          bottom: idx === 1 || idx == 2 ? 6 : 0,
          left: idx % 2 === 0 ? 6 : 0,
          borderRadius: 5,
          padding: 2.5,
          overflow: 'hidden',
          width: '100%',
          position: 'absolute',
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'font-semibold',
            lineHeight: 16,
            fontSize: 8.89,
          }}
        >
          {item.name}
        </Text>
      </BlurView>
      <Image
        style={{
          width: '100%',
          borderRadius: 5,
          height: '100%',
          resizeMode: 'cover',
          backgroundColor: 'red',
        }}
        source={{ uri: `${item.background_image}` }}
      ></Image>
    </View>
  );
};

export default ItemSoon;
