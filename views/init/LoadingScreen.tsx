import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useStatusBar from '../../services/useStatusBarCustom';

const LoadingScreen = () => {
  useStatusBar('transparent');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('StartScreen');
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/loading/loadingback.png')}
        resizeMode="cover"
        style={[styles.image, centerAll]}>
        <View style={centerAll}>
          <Text style={styles.txt}>Học qua nét cọ</Text>
          <Text style={styles.txt}>Vui từng khoảnh khắc</Text>
        </View>
        <Image
          style={styles.centerImg}
          source={require('../../assets/loading/loadingImage.png')}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    flex: 1,
    rowGap: vh(10),
  },
  txt: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  centerImg: {
    width: vw(65),
    height: vw(65),
    resizeMode: 'contain',
  },
});
