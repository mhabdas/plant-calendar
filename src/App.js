import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RootNavigator } from './routes';

export default function App() {
  const Nav = RootNavigator();
  return (
    <View style={styles.container}>
      <Nav isAuth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAEE',
  },
});
