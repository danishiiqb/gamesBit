import { View, Text } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';

const Button = ({ text, route, type, vals }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? {
              shadowOpacity: 1,
              shadowColor: '#13001F',
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 8,
              elevation: 6,
            }
          : {
              shadowOpacity: 0.6,
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 5,
              elevation: 6,
            }
      }
      onPress={() => {}}
    >
      <View
        style={{
          backgroundColor: type === 'login' ? '#49007a' : 'white',
          padding: 10,
          borderRadius: 4,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'font-semibold',
            color: type === 'login' ? 'white' : 'black',
            fontSize: 18,
          }}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;
