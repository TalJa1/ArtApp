import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {centerAll, vw} from '../../services/styleSheets';
import {loadData, saveData} from '../../services/storage';

const BtnGroupColor: React.FC<{btnText: string}> = ({btnText}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
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

  const handleBack = () => {
    saveData('CoinsStorage', coins + 300);
    navigation.navigate('StartScreen');
  };

  const handleColoring = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.btnGroupContainer}>
      <TouchableOpacity
        onPress={handleBack}
        style={[styles.backBtn, centerAll]}>
        <Text style={styles.btnText}>Trở lại</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleColoring}
        style={[styles.colorAgainBtn, centerAll]}>
        <Text style={styles.btnText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnGroupColor;

const styles = StyleSheet.create({
  btnGroupContainer: {
    flexDirection: 'row',
    paddingHorizontal: vw(5),
    width: '100%',
    justifyContent: 'space-between',
  },
  backBtn: {
    width: '30%',
    height: vw(15),
    borderRadius: 20,
    backgroundColor: '#7CBFF9',
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#5CA7EF',
  },
  colorAgainBtn: {
    width: '65%',
    height: vw(15),
    borderRadius: 20,
    backgroundColor: '#EF99DA',
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#DB80C2',
  },
  btnText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
  },
});
