import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import LogoImage from '../assets/images/logo.png';

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logoText: {
    fontSize: 30,
    fontFamily: 'Chivo-Black',
    color: '#F3FAEE',
    marginLeft: 5,
  },
});

const LogoComponent = () => (
  <View style={styles.logo}>
    <Image source={LogoImage} resizeMode="contain" style={{ width: 30, height: 30 }} />
    <Text style={styles.logoText}>Planted</Text>
  </View>
);

export default LogoComponent;
