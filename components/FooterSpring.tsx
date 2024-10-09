/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../services/styleSheets';

const FooterSpring = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={[styles.footerImg, styles.footerImg1]}
        source={require('../assets/start/footer1.png')}
      />
      <Image
        style={[styles.footerImg, styles.footerImg2]}
        source={require('../assets/start/footer2.png')}
      />
    </View>
  );
};

export default FooterSpring;

const styles = StyleSheet.create({
  footerImg: {
    width: vw(100),
    height: vh(15),
    resizeMode: 'cover',
  },
  icon1: {
    zIndex: 3,
    position: 'absolute',
    bottom: vh(3),
    right: vw(3),
  },
  footerImg1: {zIndex: 2},
  footerImg2: {zIndex: 1, position: 'absolute', bottom: 0},
});
