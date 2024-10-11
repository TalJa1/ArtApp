/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DetailRouteParams} from '../../services/typeProps';
import {vh, vw} from '../../services/styleSheets';
import BackBtn from '../../components/extra/BackBtn';

const Coloring = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<DetailRouteParams, 'Coloring'>>();
  const {img} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, paddingHorizontal: vw(5), marginVertical: vh(2)}}>
        <BackBtn />
        
      </View>
    </SafeAreaView>
  );
};

export default Coloring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
