import { View, Text } from 'react-native';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { FlatList, Image, Pressable } from 'react-native';
import avatarsDta from '../data/avatars.json';
import { Dimensions } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import { useEffect } from 'react';
const { width, height } = Dimensions.get('window');

const DropDown = ({ notifyParent }) => {
  const avatars = useRef(avatarsDta);
  const [image, setSelectedImage] = useState('');
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    if (image) {
      notifyParent(image);
    }
  }, [image]);
  return (
    <View
      style={{
        position: 'relative',
        zIndex: 7888,
      }}
    >
      <Pressable
        onPress={() => {
          setDropdown((prev) => !prev);
        }}
      >
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              marginBottom: 26,
              fontFamily: 'font-semibold',
              color: 'white',
              fontSize: 17,
              marginRight: 4,
            }}
          >
            Choose Avatar
          </Text>
          {!dropdown ? (
            <Icons size={13} color='#bfbfbf' name='caretdown'></Icons>
          ) : (
            <Icons
              style={{
                position: 'relative',
                top: 3,
              }}
              size={13}
              color='#bfbfbf'
              name='caretup'
            ></Icons>
          )}
        </View>
      </Pressable>
      {dropdown ? (
        <View
          style={{
            position: 'absolute',
            top: 27,
            shadowOpacity: 0.6,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 5,
            elevation: 6,
            zIndex: 67,
            width: '100%',
            borderRadius: 3,
            backgroundColor: '#49007a',
            height: 240,
          }}
        >
          <FlatList
            bounces={false}
            numColumns={4}
            columnWrapperStyle={{
              width: width - 16 * 2 - 6 * 2,
              justifyContent: 'space-between',
              marginBottom: 8,
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            maxToRenderPerBatch={13}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 6,
              paddingLeft: 6,
              paddingRight: 6,
            }}
            keyExtractor={(_, idx) => {
              return idx;
            }}
            data={avatars.current}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => {
                    setSelectedImage(item);
                  }}
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
                >
                  <Image
                    style={{
                      borderWidth: image === item ? 3 : 0,
                      borderColor: image === item ? 'red' : 'white',
                      borderRadius: 4,
                      backgroundColor: '#1A002B',
                      width: 89.5 - 8,
                      resizeMode: 'cover',
                      height: 68,
                    }}
                    source={{
                      uri: item,
                    }}
                  ></Image>
                </Pressable>
              );
            }}
          ></FlatList>
        </View>
      ) : null}
    </View>
  );
};

export default DropDown;
