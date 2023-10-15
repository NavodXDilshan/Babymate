import * as React from 'react';
import { useState } from 'react';
import { ScrollView,TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
const PlaceholderImage = require('./assets/logo.png');

function Hearing({ navigation }) {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);
    const [checked8, setChecked8] = useState(false);
    const [checked9, setChecked9] = useState(false);
    const [checked10, setChecked10] = useState(false);
   
  
    const handleCheckBox1 = () => {
      setChecked1(!checked1);
    };
  
    const handleCheckBox2 = () => {
      setChecked2(!checked2);
    };

    const handleCheckBox3 = () => {
        setChecked3(!checked3);
      };

      const handleCheckBox4 = () => {
        setChecked4(!checked4);
      };

      const handleCheckBox5 = () => {
        setChecked5(!checked5);
      };

      const handleCheckBox6 = () => {
        setChecked6(!checked6);
      };

      const handleCheckBox7 = () => {
        setChecked7(!checked7);
      };

      const handleCheckBox8 = () => {
        setChecked8(!checked8);
      };

      const handleCheckBox9 = () => {
        setChecked9(!checked9);
      };

      const handleCheckBox10 = () => {
        setChecked10(!checked10);
      };

    
  return (

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <View style={styles.lineBreak} />
          <Text>BabyMate</Text>
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.lineBreak} />
        <Text style={styles.text}>Answer the questions according</Text>
        <Text style={styles.text}>to the Hearing patterns of the child</Text>
        <View style={styles.boxContainer}>
        <CheckBox
        title="Does the child register loud noises? "
        checked={checked1}
        checkedColor="green"
        onPress={handleCheckBox1}
      />
        <CheckBox
        title="Has your child start to recognize or respond to consistent or continous sounds?"
        checked={checked2}
        checkedColor="green"
        onPress={handleCheckBox2}
      />

        <CheckBox
        title="Does the child respond to the voice of the mother or the caretaker?"
        checked={checked3}
        checkedColor="green"
        onPress={handleCheckBox3}
      />

        <CheckBox
        title="Does the child turn his head towards the voice of the mother or the caretaker?"
        checked={checked4}
        checkedColor="green"
        onPress={handleCheckBox4}
      />

        <CheckBox
        title="Does the child immediately respond to the mother or the caretaker's voice?"
        checked={checked5}
        checkedColor="green"
        onPress={handleCheckBox5}
      />

        <CheckBox
        title="Does the child patiently listen to familiar sounds?"
        checked={checked6}
        checkedColor="green"
        onPress={handleCheckBox6}
      />

        <CheckBox
        title="Does the child seems inquisitive of the sources of sounds or voices?"
        checked={checked7}
        checkedColor="green"
        onPress={handleCheckBox7}
      />

        <CheckBox
        title="Does the child respond positively toward rhythmic tones?"
        checked={checked8}
        checkedColor="green"
        onPress={handleCheckBox8}
      />

        <CheckBox
        title="Does the child respond to his name?"
        checked={checked9}
        checkedColor="green"
        onPress={handleCheckBox9}
      />

        <CheckBox
        title="Does the child respond to simple commands like 'No' or 'Bye'?"
        checked={checked10}
        checkedColor="green"
        onPress={handleCheckBox10}
      />

        </View>
        
      
        <View style={styles.buttonSContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 248 * 0.5,
    height: 238 * 0.5,
    borderRadius: 10,
  },
 
  lineBreak: {
    height: 15,
  },

  buttonSContainer: {
    
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#318CE7',
  },

  boxContainer: {
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginTop: 75,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#318CE7',
  },

  text: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    
  },

});

export default Hearing;