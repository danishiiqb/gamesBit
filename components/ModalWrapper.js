import { View, Text } from 'react-native';
import React from 'react';
import ModalSelection from './ModalSelection';
import { useRef } from 'react';
import selectionFilter from '../data/selectionfilter.json';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native';
import { Animated } from 'react-native';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import ButtonWrapper from './ButtonWrapper';
import Header from './Header';
import { useState } from 'react';
const { width, height } = Dimensions.get('screen');

const ModalWrapper = ({ modal, length, toggleModal, filterByItem }) => {
  const selections = useRef(selectionFilter).current;
  const translation = useRef(new Animated.Value(height)).current;
  const [allFilterRem, setAllFilterRem] = useState(false);

  function remFilters(val) {
    setAllFilterRem(val);
  }

  useEffect(() => {
    if (modal) {
      Animated.spring(translation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      translation.setValue(height);
    }
  }, [modal]);

  return (
    <Animated.View
      style={{
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: height - 70,
        zIndex: 6666,
        transform: [
          {
            translateY: translation,
          },
        ],
        backgroundColor: '#1A002B',
      }}
    >
      <Header toggleModal={toggleModal}></Header>
      <ButtonWrapper
        remFilters={remFilters}
        toggleModal={toggleModal}
        length={length}
      ></ButtonWrapper>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 120,
          paddingLeft: 16,
          paddingRight: 16,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {selections.map(({ fhead, heading, options }, idx) => {
          return (
            <ModalSelection
              remFilters={remFilters}
              filterOff={allFilterRem}
              id={idx}
              notifyParent={filterByItem}
              key={idx}
              fhead={fhead}
              heading={heading}
              options={options}
            ></ModalSelection>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default ModalWrapper;
