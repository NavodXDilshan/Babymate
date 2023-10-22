import React, { useState } from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput, Alert } from 'react-native';

const PlaceholderImage = require('./assets/logo.png');

function Record({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <View style={styles.lineBreak} />
          <Text>BabyMate</Text>
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
  
  lineBreak: {
    height: 15,
  },
});

export default Record;