/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gradeStarIcon, starIcon} from '../../assets/svgXml';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {darkenColor} from '../../services/renderData';

const StarResultView: React.FC<{showStar: boolean}> = ({showStar}) => {
  return (
    <View style={styles.starContainer}>
      {showStar && (
        <View style={styles.starRow}>
          {gradeStarIcon(20, 20)}
          {gradeStarIcon(20, 20)}
          {gradeStarIcon(20, 20)}
        </View>
      )}
      <View style={styles.starContainer1}>
        <Text style={styles.starTxt}>+300</Text>
        <View
          style={[
            styles.starGrp,
            centerAll,
            {
              backgroundColor: '#EFBB00',
              borderColor: darkenColor('#EFBB00', 20),
            },
          ]}>
          {starIcon(vw(7), vw(7))}
        </View>
      </View>
    </View>
  );
};

export default StarResultView;

const styles = StyleSheet.create({
  starContainer: {
    flex: 1,
    alignItems: 'center',
    rowGap: vh(1),
    marginVertical: vh(2),
  },
  starRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80, // Adjust the width as needed
  },
  starGrp: {
    padding: vw(2),
    borderRadius: vw(40),
    zIndex: 2,
    borderBottomWidth: 4,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  starTxt: {
    color: '#000000',
    fontSize: 32,
    fontWeight: '900',
  },
  starContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF9BD',
    borderRadius: 20,
    paddingHorizontal: vw(3),
    paddingVertical: vh(0.5),
    columnGap: vw(2),
  },
});
