/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/useStatusBarCustom';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/extra/Header';
import {vw} from '../../services/styleSheets';
import {LessonHomeData} from '../../services/renderData';

const LessonScreen = () => {
  useStatusBar('#899AF8');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingHorizontal: vw(5), flex: 1}}>
          <Header
            title="Bài học"
            img={require('../../assets/mainSketh/drawIcon.png')}
          />
          <View style={styles.btnGroup}>
            {LessonHomeData.map((item, index) => {
              return (
                <TouchableOpacity style={styles.btn} key={index}>
                  <Image style={styles.btnImg} source={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LessonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#899AF8',
  },
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
  },
  btnImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
