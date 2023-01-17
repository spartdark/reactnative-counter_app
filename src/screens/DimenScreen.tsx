import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const DimenScreen = () => {
  return (
   <View>
   <View style={styles.cajaMorada} ></View>
   <View style = {styles.cajaNaranja}></View>
   </View>
  )
}
const styles = StyleSheet.create({
    cajaMorada: {
        backgroundColor: '#5856D6',
        with:'50%y ',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    }
});