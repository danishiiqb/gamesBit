import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');
import ItemSoon from './ItemSoon';
import Heading from './Heading';
import ButtonComp from './ButtonComp';

const ComingSoon = ({ months: { startingMonth, endingMonth } }) => {
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
      let limitedData = gamesData.results.slice(0, 5);
      setData([...limitedData]);
    }
    getData();
  }, []);

  return (
    <LinearGradient
      start={[0, 0.2]}
      end={[1, 0.56]}
      style={{
        height: 390,
        marginTop: 33,
        marginBottom: 44,
      }}
      colors={['#71004A', '#220038']}
    >
      <View
        style={{
          height: '100%',
          width: width,
          justifyContent: 'center',
          paddingLeft: 13,
          paddingRight: 13,
        }}
      >
        <Heading></Heading>
        <View
          style={{
            height: '60%',
            width: '100%',
            flexDirection: 'row',
          }}
        >
          {data.length > 0 && (
            <>
              <ItemSoon expanded item={data[0]}></ItemSoon>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: '60%',
                }}
              >
                {data.map((item, idx) => {
                  if (idx === 0) {
                    return;
                  }
                  return <ItemSoon key={idx} idx={idx} item={item} />;
                })}
              </View>
            </>
          )}
        </View>
        <ButtonComp
          text='Coming Soon'
          rating={false}
          consoleGame={false}
          startingMonth={startingMonth}
          endingMonth={endingMonth}
        ></ButtonComp>
      </View>
    </LinearGradient>
  );
};

export default ComingSoon;
