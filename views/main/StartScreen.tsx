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
import useStatusBar from '../../services/useStatusBarCustom';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {grassIcon, playStartIcon} from '../../assets/svgXml';
import {BrushList, CoinsData, FourBtn} from '../../services/renderData';
import StarGroupComponent from '../../components/main/StarGroupComponent';
import BrushModalComponent from '../../components/main/BrushModalComponent';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {loadData, saveData} from '../../services/storage';
import {
  BrushItem,
  StartScreenFooterProps,
  StartScreenHeaderProps,
} from '../../services/typeProps';

const generateRandomGrassIcons = (numIcons: number) => {
  return Array.from({length: numIcons}).map(() => {
    const size = vw(Math.random() * 5 + 5); // Random size between 5vw and 10vw
    const top = Math.random() * 100; // Random position for top (0% to 100%)
    const left = Math.random() * 100; // Random position for left (0% to 100%)
    return {
      size,
      top: vh(top),
      left: vw(left),
    };
  });
};

const StartScreen = () => {
  useStatusBar('#8ACE5D');
  const [coins, setCoins] = useState<number>(0);

  const grassIcons = generateRandomGrassIcons(10); // Generate 8 grass icons

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={styles.grassContainer}>
            {grassIcons.map((icon, index) => (
              <View
                key={index}
                style={{
                  position: 'absolute',
                  top: icon.top,
                  left: icon.left,
                  width: icon.size,
                  height: icon.size,
                }}>
                {grassIcon(icon.size, icon.size)}
              </View>
            ))}
          </View>
          <Header coins={coins} setCoins={setCoins} />
          <CenterView />
          <Footer setCoins={setCoins} coins={coins}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Footer: React.FC<StartScreenFooterProps> = ({setCoins, coins}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [brush, setBrush] = useState<BrushItem[]>([]);
  const handleBtnPress = (index: number) => {
    switch (index) {
      case 0:
        setModalVisible(true);
        break;
      case 1:
        navigation.navigate('LessonScreen');
        break;
      case 2:
        console.log('Cart');
        break;
      case 3:
        navigation.navigate('ColorHome');
        break;
    }
  };

  const fetchData = async () => {
    await loadData<BrushItem[]>('brushListStorage')
      .then(data => {
        setBrush(data);
      })
      .catch(() => {
        saveData('brushListStorage', BrushList);
        setBrush(BrushList);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View>
      <View style={styles.footerContainer}>
        {FourBtn.map((btn, index) => {
          return (
            <TouchableOpacity
              disabled={index === 2}
              onPress={() => handleBtnPress(index)}
              key={index}
              style={styles.footerBtn}>
              <Image source={btn} />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={[styles.footerImg, styles.footerImg1]}
          source={require('../../assets/start/footer1.png')}
        />
        <Image
          style={[styles.footerImg, styles.footerImg2]}
          source={require('../../assets/start/footer2.png')}
        />
      </View>
      <BrushModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        BrushListData={brush}
        setBrushList={setBrush}
        setCoins={setCoins}
        coins={coins}
      />
    </View>
  );
};

const CenterView: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={centerAll}>
      <Image
        style={styles.centerImg}
        source={require('../../assets/start/start1.png')}
      />
      <TouchableOpacity
        style={styles.goOnBtn}
        onPress={() => navigation.navigate('Sketh')}>
        {playStartIcon(vw(10), vw(10))}
        <Text style={styles.goOnTxt}>Tiếp tục vẽ</Text>
      </TouchableOpacity>
    </View>
  );
};

const Header: React.FC<StartScreenHeaderProps> = ({coins, setCoins}) => {
  const fetchData = async () => {
    await loadData<number>('CoinsStorage')
      .then(data => {
        setCoins(data);
      })
      .catch(() => {
        saveData('CoinsStorage', CoinsData);
        setCoins(CoinsData);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image
          style={styles.headerBtnImg}
          source={require('../../assets/start/settingBtn.png')}
        />
      </TouchableOpacity>
      <StarGroupComponent
        starCount={coins}
        color="#EFBB00"
        borderColor="#FEF9BD"
      />
      <TouchableOpacity>
        <Image
          style={styles.headerBtnImg}
          source={require('../../assets/start/soundBtn.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ACE5D',
  },
  headerContainer: {
    marginVertical: vh(2),
    paddingHorizontal: vw(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBtnImg: {
    width: vw(14),
    height: vw(14),
    resizeMode: 'contain',
  },
  goOnBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: vw(3),
    paddingHorizontal: vw(5),
    borderRadius: vw(10),
    marginTop: vh(5),
    columnGap: vw(4),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  goOnTxt: {
    fontSize: 32,
    fontWeight: '900',
    color: '#000000',
    fontFamily: 'Nunito-Bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: vh(2),
  },
  footerBtn: {
    width: vw(15),
    height: vw(15),
    resizeMode: 'contain',
  },
  footerImg: {
    width: vw(100),
    height: vh(15),
    resizeMode: 'cover',
  },
  footerImg1: {zIndex: 1},
  footerImg2: {zIndex: 2, position: 'absolute', bottom: 0},
  grassContainer: {
    position: 'absolute',
    width: vw(100),
    height: vh(100),
  },
  centerImg: {
    width: vw(65),
    height: vw(65),
    resizeMode: 'contain',
  },
});
