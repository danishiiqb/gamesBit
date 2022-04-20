import { View, Text } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';

const ButtonWrapper = ({ length, remFilters, toggleModal }) => {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        padding: 16,
        backgroundColor: '#1A002B',
        bottom: 0,
        zIndex: 677,
      }}
    >
      {length === 0 ? null : (
        <Pressable
          onPress={() => {
            toggleModal(false);
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 13,
              borderRadius: 29,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontFamily: 'font-semibold',
                color: 'black',
                fontSize: 16,
                textAlign: 'center',
              }}
            >
              Show all {length} items
            </Text>
          </View>
        </Pressable>
      )}
      <Pressable
        onPress={() => {
          remFilters(true);
        }}
      >
        <View
          style={{
            width: '100%',
            backgroundColor: '#440070',
            padding: 13,
            borderRadius: 29,
          }}
        >
          <Text
            style={{
              fontFamily: 'font-semibold',
              color: 'white',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            Remove All Filters
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ButtonWrapper;
