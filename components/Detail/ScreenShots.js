import { View, Text, Image } from 'react-native';
import React from 'react';
import ItemSoon from '../Home.js/ComingSoon/ItemSoon';

const ScreenShots = ({ images }) => {
  return (
    <View
      style={{
        marginTop: 11,
        flexDirection: 'row',
        height: '100%',
      }}
    >
      <ItemSoon detail expanded item={images[1]}></ItemSoon>
      <View
        style={{
          width: '50%',
        }}
      >
        {images.slice(1, 4).map((img, idx) => {
          if (idx === 0) {
            return;
          }
          return (
            <View
              key={idx}
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                height: '50%',
              }}
            >
              <ItemSoon idx={idx} detail item={img}></ItemSoon>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ScreenShots;
