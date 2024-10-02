import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../../services/styleSheets';
import {StarGroupComponentProps} from '../../services/typeProps';

const StarGroupComponent: React.FC<StarGroupComponentProps> = ({starCount}) => {
  return (
    <View style={styles.starContainer}>
      <Image
        style={styles.starImg}
        source={require('../../assets/start/starCircle.png')}
      />
      <View style={styles.headerTxtContainer}>
        <Text style={styles.headerTxt}>{starCount}</Text>
      </View>
    </View>
  );
};

export default StarGroupComponent;

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starImg: {
    width: vw(12),
    height: vw(12),
    resizeMode: 'contain',
    position: 'relative',
    left: vw(4.5),
    zIndex: 2,
  },
  headerTxtContainer: {
    backgroundColor: '#EFBB00',
    paddingVertical: vh(0.3),
    paddingHorizontal: vw(5),
    borderTopRightRadius: vw(20),
    borderBottomRightRadius: vw(20),
    borderWidth: 4,
    borderColor: '#C8E589',
  },
  headerTxt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '900',
  },
});
