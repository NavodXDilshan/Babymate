import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const PlaceholderImage = require('./assets/logo.png');

function BMIChart({ route }) {
  
 
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState('');

  const navigation = useNavigation();
  const paramKeyValue = route.params.paramKey;


    
    const data = {
        labels: ['24', '30', '36', '42', '48', '54', '48','60'],
        datasets: [
          {
            data: [17.8, 17.4, 17.2, 17.1, 17.1, 17.1, 17.1],
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Set the line color
          },
          {
            data: [14.4, 14.1, 13.8, 13.6, 13.4, 13.3, 13.3], // NaN to leave the last data point empty
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Set the line color for data2
          },

          {
            data: [paramKeyValue,paramKeyValue,paramKeyValue,paramKeyValue,paramKeyValue,paramKeyValue,paramKeyValue], // NaN to leave the last data point empty
            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Set the line color for data2
          },
        ],
    
      };
      
      
      return (
        
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image source={PlaceholderImage} style={styles.image} />
              <View style={styles.lineBreak} />
              <Text>BabyMate</Text>
              <View style={styles.lineBreak} />
              <View style={styles.lineBreak} />
              <View style={styles.text} />

           
              <Text>Find out whether the BMI value of the child is within the optimal range</Text>
            </View>
           
            <LineChart
  data={data}
  width={500} // Adjust the width to your desired value
  height={500} // Adjust the height to your desired value
  chartConfig={{
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }}
  bezier
  style={styles.chart}
  fromZero={false}
  yLabelsOffset={10}
  xAxisLabel="m"
  yAxisLabel="BMI"
/>
             
          </View>
        </SafeAreaView>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'top',
      alignItems: 'center',
      backgroundColor: 'white' 

    },
    
    imageContainer: {
     
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
    chart: {
     alignItems:'center',
      marginVertical: 40,
      borderRadius: 16,
      
    },

    text: {
        justifyContent:'center',
        alignItems:'center',
        fontSize:'50'
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
    buttonContainer: {
      alignSelf: 'flex-end',
      alignSelf: 'center',
      marginBottom: 150,
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

  export default BMIChart;