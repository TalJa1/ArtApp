/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import Header from '../../components/extra/Header';
import {vw} from '../../services/styleSheets';

const ColorHome = () => {
  useStatusBar('#EF99DA');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingHorizontal: vw(5)}}>
          <Header
            img={require('../../assets/color/icon1.png')}
            title="Tô màu"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ColorHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF99DA',
  },
});
