import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';

const PlaceholderImage = require('./assets/logo.png');

function Profile({ navigation }) {
  const [email, setEmail] = useState('');
  const [passWord,setPassWord] = useState(''); 
  const [firstName,setFirstName] = useState(''); 
  const [lastName,setLastName] = useState(''); 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <View style={styles.lineBreak} />
          <Text>BabyMate</Text>
        </View>
        
        <View style={[styles.inputContainer]}>

        <Text>First Name :</Text>
          <TextInput
            value={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
            placeholder={'Type your First Name here'}
            style={styles.input}
          />
           <View style={styles.lineBreak} />
          <Text>Last Name :</Text>
          <TextInput
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
            placeholder={'Type your Last Name here'}
            style={styles.input}
          />
           <View style={styles.lineBreak} />
          <Text>Email :</Text>
          <TextInput
            value={email}
            onChangeText={(email) => setEmail(email)}
            placeholder={'Type your Email here'}
            style={styles.input}
          />

            <View style={styles.lineBreak} />
            <Text>Password :</Text>
            <TextInput
            value={passWord}
            onChangeText={(passWord) => setPassWord(passWord)}
            placeholder={'Password'}
            style={styles.input}
          />    
          
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.lineBreak} />
        <View style={styles.buttonSContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    
  },
 
  image: {
    width: 248 * 0.5,
    height: 238 * 0.5,
    borderRadius: 10,
  },
  inputContainer: {
    flex : 1,
    alignSelf: 'flex-start',
    marginTop: -150,
    paddingHorizontal: 30,
    
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: 250,
  },

  lineBreak: {
    height: 15,
  },

  buttonSContainer: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#6CB4EE',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Profile;