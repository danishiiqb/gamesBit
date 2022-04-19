import { View, Text } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';

const BackgroundGradient = ({ radius = 40, image, height }) => {
  return (
    <View
      style={{
        height,
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
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
        blurRadius={radius}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          position: 'absolute',
          height: '100%',
          backgroundColor: '#2a0045',
          resizeMode: 'cover',
        }}
        source={{
          uri: image,
        }}
      ></ImageBackground>
    </View>
  );
};

export default BackgroundGradient;
