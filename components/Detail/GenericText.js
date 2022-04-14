import { View, Text } from 'react-native';
import React from 'react';

const GenericText = ({ expand, text }) => {
  return (
    <Text
      style={{
        fontSize: expand ? 18 : 11.7,
        color: 'white',
        fontFamily: 'font-semibold',
      }}
    >
      {text}:
    </Text>
  );
};

export default GenericText;
