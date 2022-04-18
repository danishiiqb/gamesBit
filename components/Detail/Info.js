import { View, Text } from 'react-native';
import React from 'react';
import DetList from './DetList';
import GenericText from './GenericText';
import Description from './Description';
import ScreenShots from './ScreenShots';

const Info = ({ data, item }) => {
  return (
    <View
      style={{
        marginTop: 18,
        flex: 1,
      }}
    >
      <GenericText expand text={'Details'}></GenericText>
      <View
        style={{
          height: 260,
        }}
      >
        <ScreenShots images={item.short_screenshots}></ScreenShots>
      </View>
      {data ? (
        <>
          <Description desc={data.description_raw}></Description>
          <View
            style={{
              marginTop: 18,
              marginBottom: 18,
            }}
          >
            <GenericText expand text={'Ratings'}></GenericText>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 12,
                flex: 1,
                justifyContent: 'space-between',
              }}
            >
              {item.ratings.map((itm, idx) => {
                return (
                  <View
                    key={idx}
                    style={{
                      borderWidth: 2,
                      borderColor: '#360059',
                      justifyContent: 'center',
                      height: 50,
                      position: 'relative',
                      borderRadius: 6,
                      width: 176,
                      marginBottom: 8,
                      overflow: 'hidden',
                    }}
                  >
                    <View
                      style={{
                        position: 'absolute',
                        width: `${itm.percent}%`,
                        height: '100%',
                        borderRadius: 6,
                        backgroundColor: '#360059',
                      }}
                    ></View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 9,
                        marginRight: 9,
                        justifyContent: 'space-between',
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: 'font-semibold',
                          color: 'white',
                          fontSize: 15,
                        }}
                      >
                        {itm.title}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'font-bold',
                          color: 'white',
                          fontSize: 16,
                          marginLeft: 9,
                        }}
                      >
                        {itm.percent}%
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <DetList publisher={true} items={data?.publishers}></DetList>
        </>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

export default Info;
