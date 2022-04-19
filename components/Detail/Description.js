import { View, Text } from 'react-native';
import React from 'react';
import { useState } from 'react';
import GenericText from './GenericText';
import { Pressable } from 'react-native';

const Description = ({ desc }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <View
      style={{
        marginTop: 38,
      }}
    >
      <GenericText expand text={'Description'}></GenericText>
      <Text
        style={{
          marginTop: 8,
          color: 'white',
          lineHeight: 20,
          fontFamily: 'font-regular',
        }}
      >
        {desc.slice(0, showMore ? desc.length : 300)}
        {
          <Pressable
            onPress={() => {
              setShowMore(!showMore);
            }}
          >
            <Text
              style={{
                color: 'white',
                marginTop: 24,
                marginLeft: 12,
                fontFamily: 'font-bold',
              }}
            >
              {!showMore ? 'Show More...' : 'Show Less...'}
            </Text>
          </Pressable>
        }
      </Text>
    </View>
  );
};

export default Description;
