import { View, Text } from 'react-native';
import React from 'react';
import Profile from './Profile';
import { LikedContextProvider } from '../context/LikedContext';
import { useEffect } from 'react/cjs/react.production.min';

const ProfileWrapper = () => {
  return (
    <LikedContextProvider>
      <Profile></Profile>
    </LikedContextProvider>
  );
};

export default ProfileWrapper;
