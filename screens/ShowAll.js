import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { FlatList, Pressable } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import ListItem from '../components/Home.js/List/ListItem';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import Spinner from '../components/Spinner';
import Filter from '../components/Filter';
import ModalWrapper from '../components/ModalWrapper';
const { width, height } = Dimensions.get('window');

const ShowAll = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [filteredItem, setFilteredItem] = useState([]);
  const max = useRef(0);
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

  function openModal(val) {
    setModal(val);
  }
  function filterByItem(filteredList) {
    let filteredData = data.filter((item, idx) => {
      let found = false;
      item[filteredList.fhead].forEach((element) => {
        filteredList.list.forEach((selectedFilter) => {
          if (
            filteredList.fhead === 'platforms'
              ? element.platform.name
              : element.name === selectedFilter
          ) {
            found = true;
          }
        });
      });
      return found;
    });
    setFilteredItem(filteredData);
  }

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
      let totalCount = allData?.length && gamesData.count / allData.length;
      if (totalCount > 20) {
        max.current = 20;
      } else {
        max.current = totalCount;
      }
      if (!allData) {
        return;
      }
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
      <ModalWrapper
        modal={modal}
        length={filteredItem.length}
        toggleModal={() => {
          setModal(false);
        }}
        filterByItem={filterByItem}
      ></ModalWrapper>

      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 90,
          paddingLeft: 13,
          paddingRight: 13,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
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
        <Filter modVal={modal} openModal={openModal}></Filter>
      </View>
      {data.length > 0 ? (
        <>
          <BackgroundGradient
            height={630}
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
                  nativeEvent.contentSize.height - 600
                ) {
                  if (pageIndex < max.current) {
                    !modal &&
                      setPageIndex((prev) => {
                        return prev + 1;
                      });
                  }
                }
              }}
              scrollEventThrottle={250}
              initialNumToRender={9}
              bounces={false}
              updateCellsBatchingPeriod={500}
              columnWrapperStyle={{
                width: width - 13 * 2,
                justifyContent: 'space-between',
                marginBottom: 24,
              }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              maxToRenderPerBatch={8}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 25,
              }}
              numColumns={3}
              data={filteredItem.length > 0 ? filteredItem : data}
              renderItem={itemRender}
              keyExtractor={(item, idx) => {
                return item.id;
              }}
            ></FlatList>
          </View>
        </>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spinner load={!data.length} size={45}></Spinner>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ShowAll;
