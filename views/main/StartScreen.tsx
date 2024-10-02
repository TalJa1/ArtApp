/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {playStartIcon} from '../../assets/svgXml';
import {FourBtn} from '../../services/renderData';

const StartScreen = () => {
  useStatusBar('#8ACE5D');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <Header />
          <CenterView />
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Footer: React.FC = () => {
  return (
    <View>
      <View style={styles.footerContainer}>
        {FourBtn.map((btn, index) => {
          return (
            <TouchableOpacity key={index} style={styles.footerBtn}>
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
        <Text style={styles.goOnTxt}>Tiếp tục</Text>
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
      <View style={styles.starContainer}>
        <Image
          style={styles.starImg}
          source={require('../../assets/start/starCircle.png')}
        />
        <View style={styles.headerTxtContainer}>
          <Text style={styles.headerTxt}>2000</Text>
        </View>
      </View>
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
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starImg: {
    width: vw(12),
    height: vw(12),
    resizeMode: 'contain',
    position: 'relative',
    left: vw(4.5),
    zIndex: 2,
  },
  headerTxtContainer: {
    backgroundColor: '#EFBB00',
    paddingVertical: vh(0.3),
    paddingHorizontal: vw(5),
    borderTopRightRadius: vw(20),
    borderBottomRightRadius: vw(20),
    borderWidth: 4,
    borderColor: '#C8E589',
  },
  headerTxt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '900',
  },
  goOnBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: vw(3),
    paddingHorizontal: vw(10),
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(5),
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
  footerImg1: {},
  footerImg2: {zIndex: 1, position: 'absolute', bottom: 0},
});
