import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import Hero from '../components/Home.js/Hero';

const Home = () => {
  useEffect(() => {
    // async function getData() {
    //   let gamesData = await (
    //     await fetch(
    //       `https://api.rawg.io/api/games?key=b4b44fe4937c40fe97bf7de6fb2d4c96`
    //     )
    //   ).json();
    // }
    // getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#1A002B' }}>
      <Hero></Hero>
    </View>
  );
};

export default Home;
