import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Rating = ({ rating }) => {
  return (
    <View
      style={{
        width: 45,
        height: 22,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 6,
        backgroundColor: 'white',
        borderRadius: '6',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon name='star' size={10} color='black' />
      <Text
        style={{
          color: 'black',
          marginLeft: 2,
          fontFamily: 'font-semibold',
          position: 'relative',
        }}
      >
        {rating}
      </Text>
    </View>
  );
};

export default Rating;
