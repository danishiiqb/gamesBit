import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable } from 'react-native';

const Item = ({ item, index }) => {
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
    >
      <View
        style={{
          height: 295,

          marginRight: 15,
          width: 350,
        }}
      >
        <View style={{ borderRadius: 9, overflow: 'hidden' }}>
          <ImageBackground
            style={{
              width: '100%',
              justifyContent: 'flex-end',
              height: '100%',
            }}
            resizeMode='cover'
            source={{ uri: `${item.background_image}` }}
          >
            <LinearGradient
              start={[0, 0.2]}
              end={[0, 0.56]}
              style={{ height: '40.5%', justifyContent: 'flex-end' }}
              colors={['transparent', 'rgba(26,0,43,.85)']}
            >
              <View
                style={{
                  paddingBottom: 14,
                  paddingLeft: 12,
                  paddingRight: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: 'font-semibold',
                    color: 'white',
                    lineHeight: 28,
                  }}
                >
                  {item.name}
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                  {item.genres.slice(0, 3).map((el, idx) => {
                    return (
                      <View
                        key={idx}
                        style={{
                          padding: 1,
                          paddingLeft: 3,
                          paddingRight: 3,
                          borderColor: 'white',
                          borderWidth: 0.5,
                          borderRadius: 2,
                          marginRight: 5,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 8,
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
            </LinearGradient>
          </ImageBackground>
        </View>
      </View>
    </Pressable>
  );
};

export default Item;
