import { View, Text, Image } from 'react-native';
import React from 'react';
import Button from './Form/Button';
import Box from './Box';

const Empty = ({ style, user }) => {
  return (
    <View
      style={[
        {
          position: 'relative',
          top: 450,
          alignItems: 'center',
          padding: 16,
        },
        style,
      ]}
    >
      <Box></Box>
      <View>
        {!user ? (
          <Button route={'Login'} text='Login' type='non-submit'></Button>
        ) : null}
      </View>
    </View>
  );
};

export default Empty;
