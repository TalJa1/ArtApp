/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';

const LessonDraw = () => {
  useStatusBar('#899AF8');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Text>Lesson Draw</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LessonDraw;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#899AF8'},
});
