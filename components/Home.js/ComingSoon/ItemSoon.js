import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

const ItemSoon = ({ expanded, item, idx, detail }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={[
        {
          shadowOpacity: 0.6,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 3,
          elevation: 6,
          position: 'relative',
        },
        expanded
          ? {
              paddingRight: 6,
              width: detail ? '50%' : '40%',
              height: '100%',
            }
          : {
              width: detail ? '100%' : '50%',
              height: detail ? '100%' : '50%',
              paddingLeft: detail ? 0 : idx % 2 === 0 ? 6 : 0,
              paddingBottom: detail
                ? idx == 1 && 6
                : idx === 1 || idx == 2
                ? 6
                : 0,
            },
      ]}
      onPress={() => {
        navigation.push('Detail', item);
      }}
    >
      <View
        style={{
          position: 'relative',
        }}
      >
        {!detail && (
          <BlurView
            intensity={89}
            tint='dark'
            style={{
              zIndex: 3,
              bottom: 0,
              borderRadius: 5,
              padding: 2.5,
              overflow: 'hidden',
              width: '100%',
              position: 'absolute',
            }}
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'font-semibold',
                lineHeight: 16,
                fontSize: 8.89,
              }}
            >
              {item.name}
            </Text>
          </BlurView>
        )}

        <Image
          style={{
            width: '100%',
            borderRadius: 5,
            height: '100%',
            resizeMode: 'cover',
            backgroundColor: '#2a0045',
          }}
          source={{ uri: detail ? item?.image : `${item.background_image}` }}
        ></Image>
      </View>
    </Pressable>
  );
};

export default ItemSoon;
