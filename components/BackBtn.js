import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackBtn = ({ style }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.goBack();
      }}
      style={[
        {
          position: 'absolute',
          top: 46,
          left: 16,
        },
        style,
      ]}
    >
      <Icon name='left' size={18} color='white'></Icon>
    </Pressable>
  );
};

export default BackBtn;
