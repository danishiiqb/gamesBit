import { View, Text } from 'react-native';
import React from 'react';
import GenericText from './GenericText';

const DetList = ({ items }) => {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}
    >
      <GenericText text='Platforms'></GenericText>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 6,
        }}
      >
        {items.map((el, idx) => {
          return (
            <View
              key={idx}
              style={{
                marginRight: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: '#dedede',
                  marginTop: 4,
                  fontFamily: 'font-semibold',
                }}
              >
                {el.platform.name}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default DetList;
