import { View, Text } from 'react-native';
import React from 'react';

const TopInfo = ({ genres, item }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
      <View
        style={{
          marginRight: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 11,
            color: '#dedede',
            fontFamily: 'font-semibold',
          }}
        >
          {item.released.split('-')[0]}
        </Text>
        <View
          style={{
            width: 3,
            height: 3,
            marginLeft: 4,
            borderRadius: 66,
            backgroundColor: '#dedede',
          }}
        ></View>
      </View>
      {genres.map((el, idx) => {
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
                fontSize: 11,
                color: '#dedede',
                fontFamily: 'font-semibold',
              }}
            >
              {el.name}
            </Text>
            {idx === genres.length - 1 ? null : (
              <View
                style={{
                  width: 3,
                  height: 3,
                  marginLeft: 4,
                  borderRadius: 66,
                  backgroundColor: '#bfbfbf',
                }}
              ></View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default TopInfo;
