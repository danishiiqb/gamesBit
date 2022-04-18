import { View, Text, Image } from 'react-native';
import React from 'react';
import Button from './Form/Button';
import Box from './Box';

const Empty = () => {
  return (
    <View
      style={{
        position: 'relative',
        top: 450,
        alignItems: 'center',
        padding: 16,
      }}
    >
      <Box></Box>
      <View>
        <Button route={'Login'} text='Login' type='non-submit'></Button>
      </View>
    </View>
  );
};

export default Empty;
