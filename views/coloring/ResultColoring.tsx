/* eslint-disable react-native/no-inline-styles */
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {ScrollView, GestureHandlerRootView} from 'react-native-gesture-handler';
import useStatusBar from '../../services/useStatusBarCustom';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DetailRouteParams} from '../../services/typeProps';

const ResultColoring = () => {
  useStatusBar('#EF99DA');
  const route = useRoute<RouteProp<DetailRouteParams, 'ResultColoring'>>();
  const {img} = route.params;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.canvasContainer}>
            <Image source={{uri: img}} style={styles.image} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default ResultColoring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF99DA',
  },
  canvasContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
