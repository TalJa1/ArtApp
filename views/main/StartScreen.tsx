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
import {vh, vw} from '../../services/styleSheets';

const StartScreen = () => {
  useStatusBar('#8ACE5D');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
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
    width: vw(11),
    height: vw(11),
    resizeMode: 'contain',
    position: 'relative',
    left: vw(4),
    zIndex: 2,
  },
  headerTxtContainer: {
    backgroundColor: '#EFBB00',
    paddingVertical: vh(0.5),
    paddingHorizontal: vw(5),
    borderTopRightRadius: vw(20),
    borderBottomRightRadius: vw(20),
    borderWidth: 4,
    borderColor: '#C8E589',
  },
  headerTxt: {
    fontSize: vw(4),
    color: '#fff',
    fontWeight: 'bold',
  },
});
