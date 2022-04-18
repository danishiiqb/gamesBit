import { View, Text } from 'react-native';
import React from 'react';
import { LikedContextProvider } from '../context/LikedContext';
import Collection from './Collection';

const CollectionWrapper = () => {
  return (
    <LikedContextProvider>
      <Collection></Collection>
    </LikedContextProvider>
  );
};

export default CollectionWrapper;
