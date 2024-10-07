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
import StarGroupComponent from '../../components/main/StarGroupComponent';
import {vh, vw} from '../../services/styleSheets';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {backIcon, nextIcon} from '../../assets/svgXml';

const Sketh = () => {
  useStatusBar('#FCEFAD');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5)}}>
          <Header />
          <Main />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const Footer: React.FC = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={[styles.footerImg, styles.footerImg1]}
        source={require('../../assets/mainSketh/footer1.png')}
      />
      <Image
        style={[styles.footerImg, styles.footerImg2]}
        source={require('../../assets/mainSketh/footer2.png')}
      />
      <Image
        style={styles.icon1}
        source={require('../../assets/mainSketh/icon1.png')}
      />
    </View>
  );
};

const Main: React.FC = () => {
  const [level, setLevel] = useState(1);

  const handlebackLevel = () => {
    if (level > 1) {
      setLevel(level - 1);
    }
  };

  const handlenextLevel = () => {
    if (level < 5) {
      setLevel(level + 1);
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={handlebackLevel}>
          {backIcon(vw(7), vw(7))}
        </TouchableOpacity>
        <View style={styles.mainLevel}>
          <Text style={styles.levelTxt}>Level {level}</Text>
        </View>
        <TouchableOpacity onPress={handlenextLevel}>
          {nextIcon(vw(7), vw(7))}
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

export const ArtTabRender: React.FC = () => {
  return <View></View>;
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/mainSketh/backBtn.png')} />
      </TouchableOpacity>
      <StarGroupComponent
        starCount={2000}
        color="#EFBB00"
        borderColor="#FEF9BD"
      />
      <TouchableOpacity>
        <Image source={require('../../assets/mainSketh/settingBtn.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Sketh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEFAD',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: vh(2),
  },
  mainLevel: {
    backgroundColor: '#EE7F68',
    borderRadius: 20,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#DB664F',
    paddingHorizontal: vw(15),
    paddingVertical: vh(1),
  },
  levelTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  footerImg: {
    width: vw(100),
    height: vh(15),
    resizeMode: 'cover',
  },
  icon1: {
    zIndex: 3,
    position: 'absolute',
    bottom: vh(3),
    right: vw(3),
  },
  footerImg1: {zIndex: 2},
  footerImg2: {zIndex: 1, position: 'absolute', bottom: 0},
});
