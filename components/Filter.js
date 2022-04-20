import { View, Text } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';
import { useState } from 'react';
import IconF from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect } from 'react';

const Filter = ({ openModal, modVal }) => {
  const [press, setPress] = useState(false);
  useEffect(() => {
    press && openModal(true);
  }, [press]);
  useEffect(() => {
    !modVal && setPress(false);
  }, [modVal]);
  return (
    <Pressable
      onPress={() => {
        setPress((prev) => !prev);
      }}
      style={{
        position: 'relative',
        top: -9,
      }}
    >
      {press ? (
        <IconF name='filter' size={23} color='white'></IconF>
      ) : (
        <IconF name='filter-outline' size={23} color='white'></IconF>
      )}
    </Pressable>
  );
};

export default Filter;
