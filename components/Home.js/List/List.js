import { View, Text, Image } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useState } from 'react';
import ListItem from './ListItem';
import Title from './Title';
import { memo } from 'react';

const List = ({
  index,
  rating,
  text,
  consoleGame,
  months: { startingMonth, endingMonth },
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let gamesData = await (
        await fetch(
          `https://api.rawg.io/api/games?key=b4b44fe4937c40fe97bf7de6fb2d4c96&page=1&${
            startingMonth &&
            endingMonth &&
            `dates=${startingMonth},${endingMonth}&`
          }${rating ? 'ordering=-rating' : 'ordering=-added'}${
            consoleGame ? `&developers=${consoleGame}` : ''
          }`
        )
      ).json();
      let limitedData = gamesData.results;
      setData([...limitedData]);
    }
    getData();
  }, []);

  return (
    <View style={{ marginTop: index === 1 ? 0 : 10 }}>
      <Title text={text}></Title>
      <View
        style={{
          height: 285,
        }}
      >
        <View>
          <FlatList
            horizontal
            decelerationRate='fast'
            snapToInterval={145 + 13}
            contentContainerStyle={{
              height: '100%',
              paddingLeft: 17,
              paddingRight: 17,
            }}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return <ListItem item={item} />;
            }}
          ></FlatList>
        </View>
      </View>
    </View>
  );
};

export default memo(List);
