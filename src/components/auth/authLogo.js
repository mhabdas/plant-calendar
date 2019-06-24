import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import LogoImage from '../../assets/images/logo.png';

const styles = StyleSheet.create({
  logo: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  logoText: {
    fontSize: 40,
    fontFamily: 'Chivo-Black',
    color: '#244f44',
    // marginLeft: 10,
    marginTop: 10,
  },
});

const LogoComponent = () => (
  <View style={styles.logo}>
    <Image source={LogoImage} resizeMode="contain" style={{ width: 60, height: 60 }} />
    <Text style={styles.logoText}>Planted</Text>
  </View>
);

export default LogoComponent;
