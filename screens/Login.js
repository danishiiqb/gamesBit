import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import { useState } from 'react';
import Button from '../components/Form/Button';
import Seperator from '../components/Form/Seperator';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import BackBtn from '../components/BackBtn';

const Login = ({ navigation }) => {
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const [formVal, setFormVal] = useState({
    email: '',
    password: '',
  });
  function handleChange(e, name) {
    setFormVal((prev) => {
      return { ...prev, [name]: e };
    });
    setErr('');
  }
  async function login() {
    const { email, password } = formVal;
    if (email && password) {
      setLoad(true);
      try {
        let user = await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate('HomePage');
      } catch (err) {
        setErr(err.message);
      }
    } else {
      setErr('Enter all fields');
    }
  }
  function handleLogin() {
    login().then((_) => {
      setLoad(false);
      setFormVal({
        email: '',
        password: '',
      });
    });
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#1A002B',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <BackBtn></BackBtn>
      <View
        style={{
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
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
            Login
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
              handleChange(e, 'email');
            }}
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
            value={formVal.email}
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
              borderRadius: 4,
              marginTop: 17,
              marginBottom: 26,
            }}
            placeholder='Enter Password'
          ></TextInput>
          <Button
            load={load}
            formSubmission={handleLogin}
            text='Login'
            type='submit'
          ></Button>
          <Seperator></Seperator>
          <Button route={'SignUp'} text='Sign Up' type='non-submit'></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
