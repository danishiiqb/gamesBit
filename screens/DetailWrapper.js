import { View, Text } from 'react-native';
import React from 'react';
import { LikedContextProvider } from '../context/LikedContext';
import Detail from './Detail';

const DetailWrapper = ({ route, navigation }) => {
  return (
    <LikedContextProvider>
      <Detail route={route} navigation={navigation}></Detail>
    </LikedContextProvider>
  );
};

export default DetailWrapper;
