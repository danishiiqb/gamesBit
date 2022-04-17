import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable } from 'react-native';
import { useState } from 'react';
import { useLikedContext } from '../../context/LikedContext';
import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { Alert } from 'react-native';

const Collect = ({ vals, collectionDoc }) => {
  const [dtaLoading, setDtaLoading] = useState(false);
  const [selected, setSelected] = useState(false);
  const { user } = useGlobalContext();
  const firstRender = useRef(false);
  let id = vals && `${vals?.name.split(' ').join('-')}-coll-${vals?.id}`;
  const { removeCollection, errCollection, collectFunc } = useLikedContext();
  useEffect(() => {
    if (collectionDoc.length > 0 && vals) {
      let fnd = collectionDoc.find((el) => el.id === id);
      if (fnd) {
        setSelected(true);
        setDtaLoading(true);
        return;
      }
    }
  }, [collectionDoc]);
  useEffect(() => {
    if (errCollection) {
      setSelected(false);
    }
  }, [errCollection]);
  useEffect(() => {
    if (selected && id && !dtaLoading) {
      collectFunc(vals, id);
      return;
    }
    if (firstRender.current && !selected && id) {
      removeCollection(id);
      return;
    }
    firstRender.current = true;
  }, [selected]);

  return (
    <Pressable
      onPress={() => {
        if (!user) {
          Alert.alert('Login', 'Login to Collect', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            { text: 'OK' },
          ]);
          return;
        }
        setSelected((prev) => !prev);
      }}
    >
      <View
        style={{
          marginLeft: 9,
        }}
      >
        {selected ? (
          <Icon name='book' color={'white'} size={16}></Icon>
        ) : (
          <Icon name='book-outline' color={'white'} size={16}></Icon>
        )}
      </View>
    </Pressable>
  );
};

export default Collect;
