import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {backIcon} from '../../assets/svgXml';
import {vw} from '../../services/styleSheets';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const BackBtn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.btnContainer}>
      {backIcon(vw(8), vw(8), 'white')}
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#7CBFF9',
    alignSelf: 'flex-start',
    padding: vw(2),
    borderRadius: 20,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#5CA7EF',
  },
});
