/* eslint-disable no-bitwise */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {StarGroupComponentProps} from '../../services/typeProps';
import {starIcon} from '../../assets/svgXml';

const darkenColor = (color: string, amount: number): string => {
  let usePound = false;

  if (color[0] === '#') {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);
  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0x00ff) + amount;
  let b = (num & 0x0000ff) + amount;

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  return (
    (usePound ? '#' : '') +
    ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')
  );
};

const StarModalGroupComponent: React.FC<StarGroupComponentProps> = ({
  starCount,
  borderColor,
  color,
}) => {
  const darkenedBorderColor = darkenColor(color || '#000000', -30);
  return (
    <View style={styles.starContainer}>
      <View
        style={[
          styles.starImg,
          {backgroundColor: color, borderColor: darkenedBorderColor},
          centerAll,
        ]}>
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
    borderRadius: 20,
    zIndex: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
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
