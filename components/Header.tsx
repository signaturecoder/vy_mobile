import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text,View } from './Themed';

const VYHeader = () => {
    return (
        <View style={styles.container}>
            <View><Text style={styles.heading}>सत्य काम !</Text></View>
            <Image style={styles.Logo}
            source={require('../assets/images/A_logo.jpeg')}></Image>
            <View><Text style={styles.heading}>सत्य संकल्प !!</Text></View>
        </View>
    )
}

export default VYHeader;

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      
    },
   Logo: {
      width: 50,
      height: 50,
    },
    heading:{
       color: 'red',
       fontSize: 20,
       paddingTop: 10
    }
  });