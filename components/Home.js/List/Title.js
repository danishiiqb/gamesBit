import { View, Text } from 'react-native';
import React from 'react';

const Title = ({ text }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          marginBottom: 9,
          fontFamily: 'font-bold',
          color: 'white',
          fontSize: 20,
        }}
      >
        {text}
      </Text>

      <View>
        <Text
          style={{
            color: '#bfbfbf',
            fontSize: 9,
            fontFamily: 'font-semibold',
          }}
        >
          Show All
        </Text>
      </View>
    </View>
  );
};

export default Title;
