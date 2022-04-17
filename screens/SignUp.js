import { View, Text } from 'react-native';
import React from 'react';
import Button from '../components/Form/Button';
import Seperator from '../components/Form/Seperator';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { StackActions } from '@react-navigation/native';
import DropDown from '../components/DropDown';
import BackBtn from '../components/BackBtn';

const SignUp = ({ navigation }) => {
  const [err, setErr] = useState(null);
  const [load, setLoad] = useState(false);
  const [formVal, setFormVal] = useState({
    name: '',
    email: '',
    password: '',
    image: '',
  });
  function getSelectedImage(img) {
    setFormVal((prev) => {
      return { ...prev, image: img };
    });
  }
  async function signup() {
    const { email, password, name } = formVal;
    if (email && password && name) {
      setLoad(true);
      try {
        let user = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user.user, {
          displayName: name,
          photoURL: formVal.image
            ? formVal.image
            : 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
        });

        navigation.navigate('HomePage');
      } catch (err) {
        setErr(err.message);
      }
    } else {
      setErr('Enter all fields');
    }
  }
  function handleSubmission() {
    signup().then((_) => {
      setLoad(false);
      setFormVal({
        email: '',
        name: '',
        password: '',
        image: '',
      });
    });
  }
  function handleChange(e, name) {
    err && setErr('');
    setFormVal((prev) => {
      return { ...prev, [name]: e };
    });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1A002B',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <BackBtn></BackBtn>
      <View>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontFamily: 'font-bold',
              color: 'white',
              fontSize: 30,
            }}
          >
            Sign Up
          </Text>
          {err ? (
            <Text
              style={{
                fontFamily: 'font-semibold',
                color: 'red',
                marginTop: 9,
              }}
            >
              {err}
            </Text>
          ) : null}
        </View>

        <View>
          <TextInput
            onChangeText={(e) => {
              handleChange(e, 'name');
            }}
            value={formVal.name}
            style={{
              borderColor: 'white',
              borderBottomWidth: 1,
              fontSize: 15,
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 5,
              color: 'white',
              borderRadius: 4,
            }}
            placeholderTextColor={'#bfbfbf'}
            placeholder='Enter Name'
          ></TextInput>
          <TextInput
            onChangeText={(e) => {
              handleChange(e, 'email');
            }}
            value={formVal.email}
            style={{
              borderColor: 'white',
              borderBottomWidth: 1,
              fontSize: 15,
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 5,
              color: 'white',
              marginTop: 17,
              marginBottom: 17,
              borderRadius: 4,
            }}
            textContentType='emailAddress'
            keyboardType='email-address'
            placeholderTextColor={'#bfbfbf'}
            placeholder='Enter Email'
          ></TextInput>
          <TextInput
            onChangeText={(e) => {
              handleChange(e, 'password');
            }}
            value={formVal.password}
            placeholderTextColor={'#bfbfbf'}
            secureTextEntry={true}
            style={{
              borderColor: 'white',
              borderBottomWidth: 1,
              fontSize: 15,
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 5,
              color: 'white',
              marginBottom: 20,
              borderRadius: 4,
            }}
            placeholder='Enter Password'
          ></TextInput>
          <DropDown notifyParent={getSelectedImage}></DropDown>
          <View
            style={{
              position: 'relative',
              zIndex: 23,
            }}
          >
            <Button
              load={load}
              formSubmission={handleSubmission}
              text='SignUp'
              type='submit'
            ></Button>
            <Seperator></Seperator>
            <Button route={'Login'} text='Login' type='non-submit'></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
