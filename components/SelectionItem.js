import { View, Text } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';
import { useEffect, useState } from 'react';

const SelectionItem = ({ filterOff, item, ToList }) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    ToList(clicked, item);
  }, [clicked]);

  useEffect(() => {
    filterOff && setClicked(false);
  }, [filterOff]);
  return (
    <Pressable
      onPress={() => {
        setClicked((prev) => {
          return !prev;
        });
      }}
    >
      <View
        style={{
          marginRight: 8.5,
          borderRadius: 12,
          marginBottom: 9,
          padding: 8.5,
          backgroundColor: clicked ? 'white' : '#440070',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'font-regular',
            color: clicked ? 'black' : 'white',
            fontSize: 14.4,
          }}
        >
          {item} +
        </Text>
      </View>
    </Pressable>
  );
};

export default SelectionItem;
