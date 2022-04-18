import { View, Text, Image } from 'react-native';
import React from 'react';
import Button from '../Form/Button';
import BackgroundGradient from '../BackgroundGradient.js';
import Empty from '../Empty';

const Display = ({ img, coll }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <BackgroundGradient
        radius={0}
        image={img}
        height={567}
      ></BackgroundGradient>
      {coll ? (
        <Empty></Empty>
      ) : (
        <View
          style={{
            position: 'relative',
            top: 450,
            alignItems: 'center',
            padding: 16,
          }}
        >
          <Image
            style={{
              borderRadius: 78,
              width: 120,
              height: 120,
              marginBottom: 18,
            }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
            }}
          ></Image>
          <Text
            style={{
              fontFamily: 'font-semibold',
              color: 'white',
              marginBottom: 18,
            }}
          >
            Log in to unlock more of the app
          </Text>
          <View>
            <Button route={'Login'} text='Login' type='non-submit'></Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default Display;
