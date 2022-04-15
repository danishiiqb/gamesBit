import { View, Text, Image } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-native-shared-element';
import { Dimensions } from 'react-native';

const ListItem = ({ idx, all, item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.push('Detail', item);
      }}
    >
      <View
        style={{
          shadowOpacity: 0.6,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 5,
          elevation: 6,
          width: all ? '100%' : 145,
          height: '100%',
          marginRight: all ? 0 : 13,
        }}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 5,
          }}
        >
          <SharedElement
            style={{
              width: '100%',
              height: '78%',
            }}
            id={item.id}
          >
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 5,
                backgroundColor: '#2a0045',
                resizeMode: 'cover',
              }}
              source={{ uri: item.background_image }}
            ></Image>
          </SharedElement>

          <View
            style={{
              marginTop: 6,
              flex: 1,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontFamily: 'font-semibold',
                lineHeight: 20,
                fontSize: 11,
              }}
            >
              {item.name.slice(0, 27)}
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 1 }}>
              {item.genres.slice(0, 2).map((el, idx) => {
                return (
                  <View
                    key={idx}
                    style={{
                      marginRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 7.7,
                        color: '#bfbfbf',
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
        </View>
      </View>
    </Pressable>
  );
};

export default ListItem;
