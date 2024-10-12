import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import StarGroupComponent from './main/StarGroupComponent';
import {vh} from '../services/styleSheets';
import { HeaderSketchProps } from '../services/typeProps';

const HeaderSketch: React.FC<HeaderSketchProps> = ({coins}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/mainSketh/backBtn.png')} />
      </TouchableOpacity>
      <StarGroupComponent
        starCount={coins}
        color="#EFBB00"
        borderColor="#FEF9BD"
      />
      <TouchableOpacity disabled>
        <Image source={require('../assets/mainSketh/settingBtn.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSketch;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: vh(1),
  },
});
