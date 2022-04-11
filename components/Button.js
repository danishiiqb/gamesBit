import { View, Text } from 'react-native';
import React from 'react';

const Button = ({ text, styles }) => {
  return (
    <View
      style={[
        {
          backgroundColor: '#260019',
          paddingLeft: 9,
          paddingRight: 9,
          paddingTop: 12,
          paddingBottom: 12,
          borderRadius: 9,
        },
        { ...styles },
      ]}
    >
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'font-bold',
          fontSize: 18,
          color: 'white',
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Button;
