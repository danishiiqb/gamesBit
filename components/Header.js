import { View, Text } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';
import IconF from 'react-native-vector-icons//Ionicons';

const Header = ({ toggleModal }) => {
  return (
    <Pressable
      onPress={() => {
        toggleModal(false);
      }}
      style={{
        paddingLeft: 16,
        paddingRight: 16,
        width: '100%',
        flexDirection: 'row',
        marginTop: 57,
        height: 39,
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          fontFamily: 'font-bold',
          color: 'white',
          fontSize: 28,
        }}
      >
        Filter Games
      </Text>
      <IconF size={30} color='white' name='close-circle-sharp'></IconF>
    </Pressable>
  );
};

export default Header;
