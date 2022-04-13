import { View, Text, Image } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { Pressable } from 'react-native';

const List = ({ text, months: { startingMonth, endingMonth } }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      let gamesData = await (
        await fetch(
          `https://api.rawg.io/api/games?key=b4b44fe4937c40fe97bf7de6fb2d4c96&page=1&${
            startingMonth &&
            endingMonth &&
            `dates=${startingMonth},${endingMonth}&`
          }ordering=-added`
        )
      ).json();
      let limitedData = gamesData.results.slice(0, 56);
      setData([...limitedData]);
    }
    getData();
  }, []);
  return (
    <View style={{ height: 313 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 16,
          paddingRight: 16,
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            marginBottom: 9,
            fontFamily: 'font-bold',
            color: 'white',
            fontSize: 20,
          }}
        >
          {text}
        </Text>

        <View>
          <Text
            style={{
              color: '#bfbfbf',
              fontSize: 9,
              fontFamily: 'font-semibold',
            }}
          >
            Show All
          </Text>
        </View>
      </View>

      <View>
        <FlatList
          horizontal
          decelerationRate='fast'
          snapToInterval={145 + 13}
          contentContainerStyle={{ paddingLeft: 17, paddingRight: 17 }}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  shadowOpacity: 0.6,
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 5,
                  elevation: 6,
                  width: 145,
                  marginRight: 13,
                }}
              >
                <View
                  style={{
                    width: '100%',
                    height: 213,
                    borderRadius: 5,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'red',
                      resizeMode: 'cover',
                    }}
                    source={{ uri: item.background_image }}
                  ></Image>
                </View>
                <View
                  style={{
                    marginTop: 6,
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'font-semibold',
                      lineHeight: 20,
                      fontSize: 12.5,
                    }}
                  >
                    {item.name}
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
                              fontSize: 7.5,
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
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
};

export default List;
