import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import Hero from '../components/Home.js/Hero';
import List from '../components/Home.js/List';
import { FlatList, ScrollView } from 'react-native';
import ComingSoon from '../components/Home.js/ComingSoon/ComingSoon';

const Home = () => {
  function getModifiedMonth(val, opt = 1) {
    const date = new Date();
    const endingMonth = date.getMonth() + opt;
    let startingMonth = endingMonth - val;
    if (startingMonth < 0) {
      startingMonth = 10 - startingMonth;
    }
    if (startingMonth === 0) {
      startingMonth = 12;
    }
    return {
      startingMonth: `${date.getFullYear()}-${`${0}${startingMonth}`.slice(
        -2
      )}-${date.getDate()}`,
      endingMonth: `${date.getFullYear()}-${`${0}${endingMonth}`.slice(
        -2
      )}-${date.getDate()}`,
    };
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#1A002B' }}>
      <Hero></Hero>
      <View style={{ flex: 1, marginTop: 15 }}>
        <List
          text={'Most Popular'}
          months={{ startingMonth: '', endingMonth: '' }}
        ></List>
        <List text={'New Releases'} months={getModifiedMonth(1)}></List>
        <ComingSoon months={getModifiedMonth(5, 9)}></ComingSoon>
      </View>
    </ScrollView>
  );
};

export default Home;
