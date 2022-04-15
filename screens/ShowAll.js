import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { FlatList, Pressable } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import ListItem from '../components/Home.js/List/ListItem';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
const { width, height } = Dimensions.get('window');

const ShowAll = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const max = useRef(1000);
  const {
    params: { rating, consoleGame, heading, startingMonth, endingMonth },
  } = route;
  function itemRender({ item, index }) {
    return (
      <View
        style={{
          height: 220,
          width: (width - 13 * 2) / 3 - 5,
        }}
      >
        <ListItem idx={index + 1} all item={item} />
      </View>
    );
  }
  console.log(pageIndex);
  useEffect(() => {
    async function getData() {
      let gamesData = await (
        await fetch(
          `https://api.rawg.io/api/games?key=b4b44fe4937c40fe97bf7de6fb2d4c96&page=${pageIndex}&${
            startingMonth &&
            endingMonth &&
            `dates=${startingMonth},${endingMonth}&`
          }${rating ? 'ordering=-rating' : 'ordering=-added'}${
            consoleGame ? `&developers=${consoleGame}` : ''
          }`
        )
      ).json();
      let allData = gamesData.results;
      console.log(allData.length, gamesData.count);
      //   let totalCount = gamesData.count / allData.length;

      setData((prev) => {
        return [...prev, ...allData];
      });
    }
    getData();
  }, [pageIndex]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#1A002B',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          zIndex: 90,
          paddingLeft: 13,
          paddingRight: 13,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            style={{
              position: 'relative',
              top: 11,
              marginRight: 3,
            }}
            name='left'
            size={18}
            color='white'
          ></Icon>
        </Pressable>
        <Text
          style={{
            marginBottom: 9,
            fontFamily: 'font-bold',
            color: 'white',
            fontSize: 28,
            lineHeight: 45,
          }}
        >
          {heading}
        </Text>
      </View>
      {data.length > 0 ? (
        <>
          <BackgroundGradient
            height={500}
            image={data[4].background_image}
          ></BackgroundGradient>
          <View
            style={{
              paddingLeft: 13,
              paddingRight: 13,
            }}
          >
            <FlatList
              onScroll={({ nativeEvent }) => {
                if (
                  nativeEvent.layoutMeasurement.height +
                    nativeEvent.contentOffset.y >=
                  nativeEvent.contentSize.height - 290
                ) {
                  setPageIndex((prev) => {
                    return prev + 1;
                  });
                }
              }}
              scrollEventThrottle={400}
              initialNumToRender={9}
              bounces={false}
              updateCellsBatchingPeriod={700}
              columnWrapperStyle={{
                width: width - 13 * 2,
                justifyContent: 'space-between',
                marginBottom: 24,
              }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              maxToRenderPerBatch={6}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 25,
              }}
              numColumns={3}
              data={data}
              renderItem={itemRender}
              keyExtractor={(item, idx) => {
                return item.id;
              }}
            ></FlatList>
          </View>
        </>
      ) : (
        <Text>Loading</Text>
      )}
    </SafeAreaView>
  );
};

export default ShowAll;
