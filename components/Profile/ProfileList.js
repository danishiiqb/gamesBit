import { View, Text, Image } from 'react-native';
import React from 'react';
import Rating from '../Detail/Rating';

const ProfileList = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: '#360059',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginBottom: 9,
        position: 'relative',
        flexDirection: 'row',
        shadowOpacity: 1,
        shadowColor: '#13001F',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        elevation: 6,
      }}
    >
      <Image
        source={{ uri: item.background_image }}
        style={{
          width: 56,
          height: 56,
          marginRight: 12,
          borderRadius: 5,
        }}
      ></Image>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              lineHeight: 20,
              color: 'white',
              fontSize: 16,
              fontFamily: 'font-semibold',
            }}
          >
            {item.name}
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              marginTop: 3.5,
            }}
          >
            {item.genres.slice(0, 3).map((el, idx) => {
              return (
                <View
                  key={idx}
                  style={{
                    marginRight: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 9,
                      color: 'white',
                      fontFamily: 'font-semibold',
                    }}
                  >
                    {el.name}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <Rating rating={item.rating}></Rating>
      </View>
    </View>
  );
};

export default ProfileList;
