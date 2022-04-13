import { View, Text } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';
import { BlurView } from 'expo-blur';

const ButtonComp = () => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? {
              shadowOpacity: 1,
              shadowColor: '#13001F',
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 3,
              elevation: 6,
            }
          : {
              shadowOpacity: 0.6,
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 1,
              elevation: 6,
            }
      }
    >
      <View
        style={{
          alignItems: 'center',
          marginTop: 16,
        }}
      >
        <BlurView
          intensity={18}
          tint='light'
          style={{
            padding: 8,
            borderRadius: 56,
            overflow: 'hidden',
            width: '40%',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'white',
              fontFamily: 'font-bold',
            }}
          >
            Show All Games
          </Text>
        </BlurView>
      </View>
    </Pressable>
  );
};

export default ButtonComp;
