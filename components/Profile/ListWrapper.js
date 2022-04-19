import { View, Text } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import ProfileList from './ProfileList';
import Empty from '../Empty';

const ListWrapper = ({ coll, txt, user }) => {
  return (
    <View
      style={{
        marginBottom: 34,
        marginTop: 25,
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 16,
            paddingBottom: 16,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 26,
              fontFamily: 'font-bold',
            }}
          >
            {txt}
          </Text>
          <View
            style={{
              position: 'relative',
              top: -1.5,
              width: 38,
              height: 24,
              borderRadius: 6,
              overflow: 'hidden',
              marginLeft: 7,
              paddingLeft: 3,
              paddingRight: 3,
              paddingTop: 3,
              paddingBottom: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}
          >
            <Text
              style={{
                color: '#1A002B',
                fontSize: 20,
                textAlign: 'center',
                fontFamily: 'font-bold',
              }}
            >
              {coll.length}
            </Text>
          </View>
        </View>
      </View>
      {coll.length === 0 ? (
        <Empty
          user={user}
          style={{
            top: '50%',
            padding: 0,
            transform: [
              {
                translateY: '-50%',
              },
            ],
          }}
        ></Empty>
      ) : (
        <FlatList
          contentContainerStyle={{}}
          maxToRenderPerBatch={7}
          initialNumToRender={6}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, idx) => item.id}
          renderItem={({ item }) => {
            return <ProfileList item={item} />;
          }}
          data={coll}
        ></FlatList>
      )}
    </View>
  );
};

export default ListWrapper;
