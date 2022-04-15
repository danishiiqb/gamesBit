import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

const Title = ({ text, rating, consoleGame, startingMonth, endingMonth }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          marginBottom: 9,
          fontFamily: 'font-bold',
          color: 'white',
          fontSize: 20,
        }}
      >
        {text}
      </Text>

      <Pressable
        onPress={() => {
          navigation.push('ShowAll', {
            rating,
            consoleGame,
            startingMonth,
            endingMonth,
            heading: text,
          });
        }}
      >
        <Text
          style={{
            color: '#bfbfbf',
            fontSize: 9,
            fontFamily: 'font-semibold',
          }}
        >
          Show All
        </Text>
      </Pressable>
    </View>
  );
};

export default Title;
