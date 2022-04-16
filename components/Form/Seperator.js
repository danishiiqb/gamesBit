import { View, Text } from 'react-native';
import React from 'react';

const Seperator = () => {
  return (
    <View
      style={{
        marginTop: 16,
        marginBottom: 16,
      }}
    >
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontFamily: 'font-semibold',
        }}
      >
        Or
      </Text>
    </View>
  );
};

export default Seperator;
