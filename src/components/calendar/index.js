import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAEE',
  },
});
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
    </View>
  );
}
