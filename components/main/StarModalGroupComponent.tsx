import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {StarGroupComponentProps} from '../../services/typeProps';
import {starIcon} from '../../assets/svgXml';

const StarModalGroupComponent: React.FC<StarGroupComponentProps> = ({
  starCount,
  borderColor,
  color,
}) => {
  return (
    <View style={styles.starContainer}>
      <View style={[styles.starImg, {backgroundColor: color}, centerAll]}>
        {starIcon(vw(7), vw(7))}
      </View>
      <View
        style={[
          styles.headerTxtContainer,
          {backgroundColor: color, borderColor: borderColor},
        ]}>
        <Text style={styles.headerTxt}>{starCount}</Text>
      </View>
    </View>
  );
};

export default StarModalGroupComponent;

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
    borderRadius: 40,
    zIndex: 2,
  },
  headerTxtContainer: {
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
});
