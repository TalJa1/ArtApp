/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {vh, vw} from '../../services/styleSheets';
import BackBtn from '../../components/extra/BackBtn';

const LessonDetail = () => {
  useStatusBar('#899AF8');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5)}}>
          <View style={{marginVertical: vh(2)}}>
            <BackBtn />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LessonDetail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#899AF8'},
});
