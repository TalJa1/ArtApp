/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {grassIcon, playStartIcon} from '../../assets/svgXml';
import {BrushList, FourBtn} from '../../services/renderData';
import StarGroupComponent from '../../components/main/StarGroupComponent';
import BrushModalComponent from '../../components/main/BrushModalComponent';

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
          <Header />
          <CenterView />
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Footer: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleBtnPress = (index: number) => {
    switch (index) {
      case 0:
        console.log('Shopping');
        break;
      case 1:
        console.log('Multi');
        break;
      case 2:
        console.log('Cart');
        break;
      case 3:
        setModalVisible(true);
        break;
    }
  };

  return (
    <View>
      <View style={styles.footerContainer}>
        {FourBtn.map((btn, index) => {
          return (
            <TouchableOpacity
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
        BrushList={BrushList}
      />
    </View>
  );
};

const CenterView: React.FC = () => {
  return (
    <View style={centerAll}>
      <Image
        width={vw(80)}
        height={vw(80)}
        resizeMode="contain"
        source={require('../../assets/start/start1.png')}
      />
      <TouchableOpacity style={styles.goOnBtn}>
        {playStartIcon(vw(10), vw(10))}
        <Text style={styles.goOnTxt}>Tiếp tục vẽ</Text>
      </TouchableOpacity>
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image
          style={styles.headerBtnImg}
          source={require('../../assets/start/settingBtn.png')}
        />
      </TouchableOpacity>
      <StarGroupComponent starCount={2000} />
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
});
