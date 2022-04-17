import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLikedContext } from '../../context/LikedContext';
import { useRef } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { Alert } from 'react-native';

const Liked = ({ vals, likesDoc }) => {
  const [selected, setSelected] = useState(false);
  const [dtaLoading, setDtaLoading] = useState(false);
  const { user } = useGlobalContext();
  const { likesFunc, errLikes, removeLiked } = useLikedContext();
  const firstRender = useRef(false);
  let id = vals && `${vals?.name.split(' ').join('-')}-lik-${vals?.id}`;
  useEffect(() => {
    if (likesDoc.length > 0 && vals) {
      let fnd = likesDoc.find((el) => el.id === id);
      if (fnd) {
        setSelected(true);
        setDtaLoading(true);
        return;
      }
    }
  }, [likesDoc]);

  useEffect(() => {
    if (errLikes) {
      setSelected(false);
    }
  }, [errLikes]);
  useEffect(() => {
    if (selected && id && !dtaLoading) {
      likesFunc(vals, id);
      return;
    }
    if (firstRender.current && !selected && id) {
      removeLiked(id);
      return;
    }
    firstRender.current = true;
  }, [selected]);

  return (
    <Pressable
      onPress={() => {
        if (!user) {
          Alert.alert('Login', 'Login to Like', [
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
      <View>
        {selected ? (
          <Icon name='heart' color={'white'} size={16}></Icon>
        ) : (
          <Icon name='hearto' color={'white'} size={16}></Icon>
        )}
      </View>
    </Pressable>
  );
};

export default Liked;
