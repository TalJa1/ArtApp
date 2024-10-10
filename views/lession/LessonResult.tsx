/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import useStatusBar from '../../services/useStatusBarCustom';
import {SafeAreaView} from 'react-native-safe-area-context';
import {loadData, saveData} from '../../services/storage';
import {useFocusEffect} from '@react-navigation/native';
import BackBtn from '../../components/extra/BackBtn';
import {vh, vw} from '../../services/styleSheets';

const LessonResult = () => {
  useStatusBar('#899AF8');
  const [coins, setCoins] = useState<number>(0);

  const fetchData = async () => {
    await loadData<number>('CoinsStorage')
      .then(dataCoins => {
        setCoins(dataCoins);
      })
      .catch(() => {
        setCoins(2000);
        saveData('CoinsStorage', 2000);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.top}>
            <BackBtn />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LessonResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#899AF8',
  },
  top: {
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
    rowGap: vh(2),
    height: vh(35),
    width: vw(100),
    overflow: 'hidden',
  },
});
