import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Navigation from './src/kernel/router/Navigation';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <Navigation />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ecf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    flexDirection: 'row',
    width: width,
    height: height,
  },
  green: {
    flex: 1,
    backgroundColor: '#006847',
  },
  white: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    flex: 1,
    backgroundColor: '#ce1126',
  },
  eagle: {
    width: width / 3,
    height: height / 3,
  },
});
