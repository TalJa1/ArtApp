/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import Header from '../../components/extra/Header';
import {vw} from '../../services/styleSheets';
import {ColorHomeData} from '../../services/renderData';

const ColorHome = () => {
  useStatusBar('#EF99DA');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingHorizontal: vw(5)}}>
          <Header
            img={require('../../assets/color/icon1.png')}
            title="Tô màu"
          />
          <View style={styles.dataContainer}>
            {ColorHomeData.map((item, index) => {
              return (
                <TouchableOpacity style={styles.btn} key={index}>
                  <Image style={styles.img} source={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ColorHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF99DA',
  },
  dataContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  btn: {
    marginVertical: vw(5),
  },
  img: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
});
