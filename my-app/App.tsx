import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';
import TextInputBody from './TextInputBody';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TextInputBody />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'red',

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;