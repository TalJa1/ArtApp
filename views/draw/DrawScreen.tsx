/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  BtnGroupProps,
  DetailRouteParams,
  TabTitleProps,
} from '../../services/typeProps';
import {vh, vw} from '../../services/styleSheets';
import FooterAutumn from '../../components/FooterAutumn';
import HeaderSketch from '../../components/HeaderSketch';

const DrawScreen = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<DetailRouteParams, 'DrawScreen'>>();
  const {data, index} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, marginBottom: vh(2), paddingHorizontal: vw(5)}}>
          <HeaderSketch />
          <TabTitle data={data} />
          <BtnGroup index={index} />
        </View>
        <FooterAutumn showIcon1={false} showIcon2={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

const BtnGroup: React.FC<BtnGroupProps> = () => {
  return <View></View>;
};

const TabTitle: React.FC<TabTitleProps> = ({data}) => {
  return (
    <View style={styles.iconGroup}>
      <View style={styles.iconGroupImgContainer}>
        <Image
          style={styles.iconGroupImg}
          source={require('../../assets/mainSketh/drawIcon.png')}
        />
      </View>
      <View style={styles.iconGroupTxtContainer}>
        <Text style={styles.iconGroupTxt}>Hãy vẽ {data.title}</Text>
      </View>
    </View>
  );
};

export default DrawScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  iconGroupImgContainer: {
    zIndex: 2,
  },
  iconGroupImg: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
  },
  iconGroupTxtContainer: {
    backgroundColor: '#E5F0FE',
    paddingVertical: vh(1.5),
    paddingHorizontal: vw(10),
    borderRadius: vw(25),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconGroupTxt: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});
