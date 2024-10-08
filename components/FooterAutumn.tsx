/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../services/styleSheets';
import {FooterAutumnProps} from '../services/typeProps';

const FooterAutumn: React.FC<FooterAutumnProps> = ({showIcon1}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={[styles.footerImg, styles.footerImg1]}
        source={require('../assets/mainSketh/footer1.png')}
      />
      <Image
        style={[styles.footerImg, styles.footerImg2]}
        source={require('../assets/mainSketh/footer2.png')}
      />
      {showIcon1 && (
        <Image
          style={styles.icon1}
          source={require('../assets/mainSketh/icon1.png')}
        />
      )}
    </View>
  );
};

export default FooterAutumn;

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
