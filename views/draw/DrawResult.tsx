/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  DrawResultProps,
  SketchViewDrawResultProps,
} from '../../services/typeProps';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Canvas} from '@benjeau/react-native-draw';
import {vh, vw} from '../../services/styleSheets';
import FooterSpring from '../../components/FooterSpring';

const DrawResult = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<DrawResultProps, 'DrawResult'>>();
  const {paths, drawIndex} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: vw(5),
          }}>
          <TopView />
          <SketchView paths={paths} index={drawIndex} />
        </View>
        <FooterSpring />
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

const SketchView: React.FC<SketchViewDrawResultProps> = ({paths}) => {
  return (
    <View style={styles.sketchViewContainer}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Canvas enabled={false} initialPaths={paths} />
      </GestureHandlerRootView>
    </View>
  );
};

export default DrawResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sketchViewContainer: {
    width: vw(70),
    height: vw(70),
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    overflow: 'hidden',
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
});
