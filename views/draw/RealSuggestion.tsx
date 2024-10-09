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
import {centerAll, vh, vw} from '../../services/styleSheets';
import {RealSuggestionRoute} from '../../services/typeProps';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import FooterSpring from '../../components/FooterSpring';
import {SketchArtList} from '../../services/renderData';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const RealSuggestion = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<RouteProp<RealSuggestionRoute, 'RealSuggestion'>>();
  const {imgIndex} = route.params;

  const handleSuggestionUse = () => {
    navigation.navigate('DrawScreen', {data: SketchArtList[imgIndex], index: imgIndex});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5)}}>
          <View style={styles.realTitle}>
            <Text style={styles.realTitleText}>Xem hình thực tế</Text>
          </View>
          <View style={[styles.imgContainer, centerAll]}>
            <Image style={styles.img} source={SketchArtList[imgIndex].img} />
          </View>
          <TouchableOpacity
            onPress={handleSuggestionUse}
            style={[styles.btnUseSuggestion]}>
            <Text style={styles.btnUseSuggestionTxt}>Tiếp tục vẽ</Text>
          </TouchableOpacity>
        </View>
        <FooterSpring />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RealSuggestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  realTitle: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 24,
    backgroundColor: '#C8E589',
    paddingVertical: vh(1.5),
    marginTop: vh(2),
  },
  realTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  btnUseSuggestion: {
    backgroundColor: '#EF99DA',
    paddingVertical: vh(1),
    paddingHorizontal: vw(10),
    borderRadius: 20,
    alignSelf: 'center',
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#DB80C2',
    position: 'absolute',
    bottom: 0,
  },
  btnUseSuggestionTxt: {
    color: 'white',
    fontSize: 32,
    fontWeight: '900',
  },
  imgContainer: {
    flex: 1,
  },
  img: {
    width: vw(60),
    height: vw(60),
    resizeMode: 'contain',
  },
});
