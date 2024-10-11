/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {MainSuggestionProps, SuggestionProps} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';
import HeaderSketch from '../../components/HeaderSketch';
import {vh, vw} from '../../services/styleSheets';
import FooterSpring from '../../components/FooterSpring';
import {SuggestionBtnGroupData} from '../../services/renderData';
import StarGroupComponent from '../../components/main/StarGroupComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
          <Main setCoins={setCoins} coins={coins} drawIndex={imgIndex} />
        </View>
        <FooterSpring />
      </ScrollView>
    </SafeAreaView>
  );
};

const Main: React.FC<MainSuggestionProps> = ({setCoins, coins, drawIndex}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setCoins(coins - 200);
    saveData('CoinsStorage', coins - 200);
    setClickedIndex(index);
  };

  const handleSuggestionUse = () => {
    navigation.navigate('RealSuggestion', {
      imgIndex: drawIndex,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.img}
        source={require('../../assets/mainSketh/sketch/suggestIcon.png')}
      />
      <View style={{rowGap: vh(1)}}>
        {SuggestionBtnGroupData.map((item, index) => {
          const isClicked = index === clickedIndex;
          return (
            <View key={index} style={styles.btnGroupContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity
                disabled={index > 0}
                onPress={() => handleButtonClick(index)}>
                <StarGroupComponent
                  starCount={item.star}
                  color={isClicked ? '#999999' : '#EFBB00'}
                  borderColor={isClicked ? 'white' : '#FEF9BD'}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={handleSuggestionUse}
        disabled={clickedIndex === null}
        style={[
          styles.btnUseSuggestion,
          clickedIndex === null && {
            backgroundColor: '#999999',
            borderColor: '#585757',
          },
        ]}>
        <Text style={styles.btnUseSuggestionTxt}>Sử dụng gợi ý</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    rowGap: vh(2),
    flex: 1,
  },
  img: {
    width: vw(50),
    height: vw(50),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  btnGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#C8E589',
    alignItems: 'center',
    paddingHorizontal: vw(5),
    paddingVertical: vh(1),
    borderRadius: 24,
  },
  title: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
  },
  btnUseSuggestion: {
    backgroundColor: '#EF99DA',
    paddingVertical: vh(1),
    paddingHorizontal: vw(10),
    borderRadius: 20,
    alignSelf: 'center',
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#DB80C2',
    position: 'absolute',
    bottom: 0,
  },
  btnUseSuggestionTxt: {
    color: 'white',
    fontSize: 32,
    fontWeight: '900',
  },
});
