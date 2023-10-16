import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

const TextInputBody = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default TextInputBody;

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