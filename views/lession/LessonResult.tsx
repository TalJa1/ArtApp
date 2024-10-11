/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/useStatusBarCustom';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useRoute} from '@react-navigation/native';
import BackBtn from '../../components/extra/BackBtn';
import {vh, vw} from '../../services/styleSheets';
import {LessonResultProps} from '../../services/typeProps';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Canvas} from '@benjeau/react-native-draw';
import StarResultView from '../../components/extra/StarResultView';
import BtnGroupColor from '../../components/extra/BtnGroupColor';

const LessonResult = () => {
  useStatusBar('#899AF8');
  const route = useRoute<RouteProp<LessonResultProps, 'SuggestionItem'>>();
  const {paths} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.top}>
            <BackBtn />
            <TopView />
          </View>
          <View style={styles.bottom}>
            <GestureHandlerRootView>
              <View style={styles.canvasContainer}>
                <Canvas initialPaths={paths} enabled={false} />
              </View>
            </GestureHandlerRootView>
            <StarResultView showStar={false} />
            <BtnGroupColor btnText="Vẽ lại" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default LessonResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#899AF8',
  },
  top: {
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
    rowGap: vh(2),
    height: vh(30),
    width: vw(100),
    overflow: 'hidden',
  },
  topViewContainer: {
    width: '100%',
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
  canvasContainer: {
    borderRadius: 20, // Adjust the value as needed
    overflow: 'hidden', // Ensure the children respect the border radius
    width: vw(90), // Match the Canvas width
    height: vh(45), // Match the Canvas height
  },
});
