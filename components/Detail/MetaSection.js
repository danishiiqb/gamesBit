import { View, Text } from 'react-native';
import React from 'react';
import GenericText from './GenericText';

const MetaSection = ({ items }) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginTop: 13,
      }}
    >
      <GenericText text='Metascore'></GenericText>
      <View
        style={{
          marginTop: 7.5,
          width: 28,
          borderRadius: 4,
          borderColor: 'green',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
        }}
      >
        <Text
          style={{
            color: 'green',

            textAlign: 'center',
            fontFamily: 'font-bold',
          }}
        >
          {items}
        </Text>
      </View>
    </View>
  );
};

export default MetaSection;
