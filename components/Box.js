import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Box = () => {
  return (
    <>
      <Icon style={{}} size={99} name='box-open' color='#850057'></Icon>
      <Text
        style={{
          fontFamily: 'font-semibold',
          color: 'white',
          marginBottom: 18,
          marginTop: 16,
        }}
      >
        Its Empty Here
      </Text>
    </>
  );
};

export default Box;
