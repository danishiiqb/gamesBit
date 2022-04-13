import { View, Text } from 'react-native';
import React from 'react';
import Logo from '../../Logo';

const Heading = () => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <Logo
        style={{
          position: 'relative',
          top: 1.4,
          width: 53,
          height: 11,
        }}
      ></Logo>
      <Text
        style={{
          marginBottom: 9,
          fontFamily: 'font-bold',
          color: 'white',
          fontSize: 20,
        }}
      >
        Coming Soon
      </Text>
    </View>
  );
};

export default Heading;
