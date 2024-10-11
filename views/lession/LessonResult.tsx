/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import useStatusBar from '../../services/useStatusBarCustom';
import {SafeAreaView} from 'react-native-safe-area-context';
import {loadData, saveData} from '../../services/storage';
import {RouteProp, useFocusEffect, useRoute} from '@react-navigation/native';
import BackBtn from '../../components/extra/BackBtn';
import {vh, vw} from '../../services/styleSheets';
import {LessonResultProps} from '../../services/typeProps';

const LessonResult = () => {
  useStatusBar('#899AF8');
  const [coins, setCoins] = useState<number>(0);
  const route = useRoute<RouteProp<LessonResultProps, 'SuggestionItem'>>();
  const {path} = route.params;

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
            <TopView />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const TopView: React.FC = () => {
  return (
    <View style={styles.topViewContainer}>
      <Image
        style={styles.topImg}
        source={require('../../assets/loading/loadingImage.png')}
      />
      <View style={styles.topTextContainer}>
        <Text style={styles.topTxt}>
          Giỏi lắm! Chắc chắn bé có năng khiếu hội họa rồi!
        </Text>
      </View>
    </View>
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
    height: vh(30),
    width: vw(100),
    overflow: 'hidden',
  },
  topViewContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  topImg: {
    width: vw(30),
    height: vw(25),
    resizeMode: 'contain',
  },
  topTextContainer: {
    flex: 1,
    maxWidth: '90%',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#C8E589',
  },
  topTxt: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '900',
  },
});
