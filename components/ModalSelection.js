import { View, Text } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SelectionItem from './SelectionItem';

const ModalSelection = ({
  filterOff,
  id,
  fhead,
  heading,
  options,
  notifyParent,
  remFilters,
}) => {
  const [listArr, setListArr] = useState({
    id,
    name: heading,
    fhead,
    list: [],
  });

  function addToList(clicked, item) {
    filterOff && remFilters(false);
    if (clicked) {
      setListArr((prev) => {
        return { ...prev, list: [...prev.list, item] };
      });
      return;
    }
    if (!clicked) {
      setListArr((prev) => {
        const filteredList = prev.list.filter((el) => {
          return el !== item;
        });
        return { ...prev, list: filteredList };
      });
    }
  }
  useEffect(() => {
    filterOff &&
      setListArr((prev) => {
        return { ...prev, list: [] };
      });
  }, [filterOff]);

  useEffect(() => {
    notifyParent(listArr);
  }, [listArr]);
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: 'font-bold',
          color: 'white',
          fontSize: 20,
        }}
      >
        {heading}
      </Text>
      <View
        style={{
          marginTop: 14,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {options.map((item, idx) => {
          return (
            <SelectionItem
              filterOff={filterOff}
              ToList={addToList}
              key={idx}
              item={item}
            ></SelectionItem>
          );
        })}
      </View>
    </View>
  );
};

export default ModalSelection;
