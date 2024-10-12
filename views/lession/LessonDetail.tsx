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
import {vh, vw} from '../../services/styleSheets';
import BackBtn from '../../components/extra/BackBtn';
import {LessonDetailData} from '../../services/renderData';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const LessonDetail = () => {
  useStatusBar('#899AF8');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleDraw = () => {
    navigation.navigate('LessonDraw');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5)}}>
          <View style={{marginVertical: vh(2)}}>
            <BackBtn />
            <Banner />
            <View style={styles.btnGroup}>
              {LessonDetailData.map((item, index) => {
                return (
                  <TouchableOpacity
                    disabled={index !== 3}
                    onPress={() => handleDraw()}
                    style={styles.btn}
                    key={index}>
                    <Image style={styles.btnImg} source={item.img} />
                    <Text style={styles.title}>{item.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Banner: React.FC = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        style={styles.banner}
        source={require('../../assets/lesson/bannerAnimal.png')}
      />
      <Image
        style={styles.icon}
        source={require('../../assets/lesson/icon1.png')}
      />
    </View>
  );
};

export default LessonDetail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#899AF8'},
  bannerContainer: {alignItems: 'center', marginVertical: vh(2)},
  banner: {width: vw(90), resizeMode: 'contain'},
  icon: {position: 'absolute', top: vh(-8), right: vw(0)},
  btnGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: vw(5),
  },
  btn: {
    width: vw(40),
    height: vw(40),
    borderRadius: vw(5),
    overflow: 'hidden',
    marginBottom: vw(5),
    alignItems: 'center',
  },
  btnImg: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF',
  },
});
