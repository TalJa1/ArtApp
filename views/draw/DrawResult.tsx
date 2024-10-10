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
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  DrawResultProps,
  SketchViewDrawResultProps,
} from '../../services/typeProps';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Canvas} from '@benjeau/react-native-draw';
import {vh, vw} from '../../services/styleSheets';
import FooterSpring from '../../components/FooterSpring';
import {homeIcon} from '../../assets/svgXml';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
          <BtnGroup />
        </View>
        <FooterSpring />
      </ScrollView>
    </SafeAreaView>
  );
};

const BtnGroup: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('StartScreen')}
        style={styles.homeBtn}>
        {homeIcon(vw(7), vw(7))}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Sketh')}
        style={styles.drawAgainBtn}>
        <Text style={styles.btnText}>Vẽ lại</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.goOnBtn}>
        <Text style={styles.btnText}>Tiếp tục vẽ</Text>
      </TouchableOpacity>
    </View>
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

const SketchView: React.FC<SketchViewDrawResultProps> = ({paths, index}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.SketchIndexContainer}>
        <Text style={styles.SketchIndexTxt}>{index}</Text>
      </View>
      <View style={styles.sketchViewContainer}>
        <GestureHandlerRootView style={styles.centeredCanvasContainer}>
          <Canvas enabled={false} initialPaths={paths} style={styles.canvas} />
        </GestureHandlerRootView>
      </View>
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
    height: vw(80),
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
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
  centeredCanvasContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Ensure the drawing is contained within the container
  },
  SketchIndexContainer: {
    position: 'absolute',
    top: vh(-2.5),
    backgroundColor: '#FDD3A8',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 16,
    zIndex: 2,
    paddingVertical: vh(0.4),
    paddingHorizontal: vw(10),
  },
  SketchIndexTxt: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
  },
  btnContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: vh(0),
    justifyContent: 'space-between',
  },
  homeBtn: {
    borderColor: '#EE7F68',
    borderWidth: 2,
    padding: vw(3),
    borderRadius: 20,
    marginHorizontal: vw(2),
  },
  drawAgainBtn: {
    backgroundColor: '#7CBFF9',
    padding: vw(3),
    borderRadius: 20,
    marginHorizontal: vw(2),
  },
  goOnBtn: {
    backgroundColor: '#EF99DA',
    padding: vw(3),
    borderRadius: 20,
    marginHorizontal: vw(2),
  },
  btnText: {
    fontSize: 24,
    fontWeight: '900',
    color: 'white',
  },
});
