import { View, Text } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import { Animated } from 'react-native';
import { useRef } from 'react';
import { useEffect } from 'react';

const Spinner = ({ load, size, style }) => {
  const rotate = useRef(new Animated.Value(0)).current;
  function anim() {
    Animated.spring(rotate, {
      toValue: 360,
      useNativeDriver: true,
    }).start((i) => {
      if (i.finished) {
        rotate.setValue(0);
        anim();
      }
    });
  }
  useEffect(() => {
    if (load) {
      anim();
    }
    if (!load) {
      rotate.setValue(0);
    }
  }, [load]);
  return (
    <Animated.View
      style={[
        {
          marginRight: 8,
          position: 'relative',
          top: -1.2,
          transform: [{ rotate: rotate }],
        },
        style,
      ]}
    >
      <Icons size={size} color='white' name='spinner'></Icons>
    </Animated.View>
  );
};

export default Spinner;
