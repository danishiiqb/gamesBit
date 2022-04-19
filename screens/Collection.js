import { View, Text } from 'react-native';
import React from 'react';
import ListWrapper from '../components/Profile/ListWrapper';
import Spinner from '../components/Spinner';
import { useGlobalContext } from '../context/GlobalContext';
import { useLikedContext } from '../context/LikedContext';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Display from '../components/Profile/Display';

const Collection = () => {
  const { user } = useGlobalContext();
  const { collectionDoc, setUpdate, load } = useLikedContext();

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
            paddingTop: 45,
            paddingBottom: 45,
            flex: 1,
          }}
        >
          <ListWrapper
            user={user}
            txt={'Collections'}
            coll={collectionDoc}
          ></ListWrapper>
        </View>
      ) : (
        <Display
          img={'https://wallpapercave.com/dwp2x/wp6272110.jpg'}
          coll={true}
        ></Display>
      )}
    </View>
  );
};

export default Collection;
