/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {StarGroupComponentProps} from '../../services/typeProps';
import {starIcon} from '../../assets/svgXml';
import { darkenColor } from '../../services/renderData';

const StarGroupComponent: React.FC<StarGroupComponentProps> = ({
  starCount,
  borderColor,
  color,
}) => {

  return (
    <View style={styles.starContainer}>
      <View
        style={[
          styles.starGrp,
          centerAll,
          {
            backgroundColor: color,
            borderColor: color ? darkenColor(color, 20) : '#000000',
          },
        ]}>
        {starIcon(vw(7), vw(7))}
      </View>
      <View
        style={[
          styles.headerTxtContainer,
          color && {backgroundColor: color},
          borderColor && {borderColor: borderColor},
        ]}>
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
  headerTxtContainer: {
    backgroundColor: '#EFBB00',
    borderColor: '#C8E589',
    paddingVertical: vh(0.3),
    paddingHorizontal: vw(5),
    borderTopRightRadius: vw(20),
    borderBottomRightRadius: vw(20),
    borderWidth: 4,
  },
  headerTxt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '900',
  },
  starGrp: {
    padding: vw(2),
    borderRadius: vw(40),
    resizeMode: 'contain',
    position: 'relative',
    left: vw(4.5),
    zIndex: 2,
    borderBottomWidth: 4,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});
