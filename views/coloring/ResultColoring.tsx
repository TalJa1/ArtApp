/* eslint-disable react-native/no-inline-styles */
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView, GestureHandlerRootView} from 'react-native-gesture-handler';
import useStatusBar from '../../services/useStatusBarCustom';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DetailRouteParams} from '../../services/typeProps';
import BackBtn from '../../components/extra/BackBtn';
import {vh, vw} from '../../services/styleSheets';
import StarResultView from '../../components/extra/StarResultView';
import BtnGroupColor from '../../components/extra/BtnGroupColor';

const ResultColoring = () => {
  useStatusBar('#EF99DA');
  const route = useRoute<RouteProp<DetailRouteParams, 'ResultColoring'>>();
  const {img} = route.params;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1}}>
            <View style={styles.top}>
              <BackBtn />
              <TopView />
            </View>
            <View style={styles.bottom}>
              <Image source={{uri: img}} style={styles.image} />
              <StarResultView showStar={false} />
              <BtnGroupColor btnText="Tô lại" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const TopView: React.FC = () => {
  return (
    <View style={styles.topViewContainer}>
      <Image
        style={styles.topImg}
        source={require('../../assets/loading/loadingImage.png')}
      />
      <View style={styles.topTextContainer}>
        <Text style={styles.topTxt}>
          Giỏi lắm! Chắc chắn bé có năng khiếu hội họa rồi!
        </Text>
      </View>
    </View>
  );
};

export default ResultColoring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF99DA',
  },
  image: {
    width: vw(90),
    height: vw(90),
    resizeMode: 'contain',
  },
  topViewContainer: {
    width: '100%',
    marginVertical: vh(3),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  topImg: {
    width: vw(30),
    height: vw(30),
    resizeMode: 'contain',
  },
  topTextContainer: {
    flex: 1,
    maxWidth: '90%',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#C8E589',
  },
  topTxt: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '900',
  },
  top: {
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
    height: vh(30),
    width: vw(100),
    overflow: 'hidden',
  },
  bottom: {
    flex: 1,
    borderWidth: 4,
    borderColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#EFBB00',
    alignItems: 'center',
    paddingVertical: vh(2),
  },
});
