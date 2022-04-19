import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { useLikedContext } from '../context/LikedContext';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import Spinner from '../components/Spinner';
import ListWrapper from '../components/Profile/ListWrapper.js';
import Display from '../components/Profile/Display';
import { useState } from 'react';
import Empty from '../components/Empty';

const Profile = () => {
  const { user } = useGlobalContext();
  const { likesDoc, setUpdate, load } = useLikedContext();
  useFocusEffect(
    useCallback(() => {
      setUpdate(true);
    }, [])
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1A002B',
      }}
    >
      {load ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner size={34} load={load}></Spinner>
        </View>
      ) : user ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 45,
            marginBottom: 45,
          }}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <View
              style={{
                alignItems: 'center',
                marginTop: 12,
              }}
            >
              <View
                style={{
                  shadowOpacity: 0.6,
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 5,
                  elevation: 6,
                }}
              >
                <Image
                  style={{
                    borderRadius: 78,
                    width: 120,
                    height: 120,
                  }}
                  source={{ uri: user.photoURL }}
                ></Image>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 19,
                  marginTop: 14,
                  fontFamily: 'font-semibold',
                }}
              >
                {user.displayName}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#bfbfbf',
                  fontSize: 13,
                  marginTop: 7,
                  fontFamily: 'font-regular',
                }}
              >
                {user.email}
              </Text>
            </View>
            <ListWrapper
              user={user}
              txt={'Liked'}
              coll={likesDoc}
            ></ListWrapper>
          </View>
        </View>
      ) : (
        <Display
          img='https://wallpaperaccess.com/full/3837596.jpg'
          coll={false}
        ></Display>
      )}
    </View>
  );
};

export default Profile;
