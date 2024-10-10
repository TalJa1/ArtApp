import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import useStatusBar from '../../services/useStatusBarCustom';
import {SafeAreaView} from 'react-native-safe-area-context';
import {loadData, saveData} from '../../services/storage';
import {useFocusEffect} from '@react-navigation/native';

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
      <ScrollView>
        <View>
          <Text>Lesson Result</Text>
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
});
