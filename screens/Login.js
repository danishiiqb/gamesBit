import { View, Text } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import { useState } from 'react';
import Button from '../components/Form/Button';
import Seperator from '../components/Form/Seperator';

const Login = () => {
  const [formVal, setFormVal] = useState({
    email: '',
    password: '',
  });
  function handleChange(e, name) {
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
            Login
          </Text>
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
            textContentType='emailAddress'
            keyboardType='email-address'
            placeholderTextColor={'#bfbfbf'}
            placeholder='Enter Email'
          ></TextInput>
          <TextInput
            onChangeText={(e) => {
              handleChange(e, 'password');
            }}
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
            formSubmission={async function login() {
              const { email, password } = formVal;
              if (email && password) {
                try {
                  let user = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                  );
                  console.log(user);
                } catch (err) {
                  console.log(err.message);
                }
              }
            }}
            vals={formVal}
            text='Login'
            type='submit'
          ></Button>
          <Seperator></Seperator>
          <Button route={'SignUp'} text='Sign Up' type='non-submit'></Button>
        </View>
      </View>
    </View>
  );
};

export default Login;
