import React from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Header = () => {
  return (
    <ImageBackground
      source={require('./images/cato.png')}
      style={styles.container}
    >
      <Text style={styles.titulo}>Welcome to React Native</Text>
    </ImageBackground>
  );
}

export default Header;

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      width: '100%',
      height: 300,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
        height: 'auto',
        width: '70%',
        color: 'white',
        backgroundColor: 'black',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 22,
    },
  });