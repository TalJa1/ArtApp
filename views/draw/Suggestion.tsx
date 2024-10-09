/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useFocusEffect, useRoute} from '@react-navigation/native';
import {SuggestionProps} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';
import HeaderSketch from '../../components/HeaderSketch';
import {vw} from '../../services/styleSheets';
import FooterSpring from '../../components/FooterSpring';

const Suggestion = () => {
  const route = useRoute<RouteProp<SuggestionProps, 'SuggestionItem'>>();
  const {imgIndex} = route.params;
  const [coins, setCoins] = useState(0);

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
        <View style={{paddingHorizontal: vw(5), flex: 1}}>
          <HeaderSketch coins={coins} />
          <Text>Suggestion</Text>
        </View>
        <FooterSpring />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
