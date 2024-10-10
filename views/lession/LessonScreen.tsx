/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/useStatusBarCustom';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/extra/Header';
import {vw} from '../../services/styleSheets';

const LessonScreen = () => {
  useStatusBar('#899AF8');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingHorizontal: vw(5), flex: 1}}>
          <Header
            title="Bài học"
            img={require('../../assets/mainSketh/drawIcon.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LessonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#899AF8',
  },
});
