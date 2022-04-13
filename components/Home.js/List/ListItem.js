import { View, Text, Image } from 'react-native';
import React from 'react';

const ListItem = ({ item }) => {
  return (
    <View
      style={{
        shadowOpacity: 0.6,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        elevation: 6,
        width: 145,
        height: '100%',
        marginRight: 13,
      }}
    >
      <View
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 5,
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '78%',
            borderRadius: 5,
            backgroundColor: 'red',
            resizeMode: 'cover',
          }}
          source={{ uri: item.background_image }}
        ></Image>
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
              fontSize: 10.3,
            }}
          >
            {item.name.slice(0, 27)}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 1 }}>
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
                      fontSize: 7,
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
  );
};

export default ListItem;
