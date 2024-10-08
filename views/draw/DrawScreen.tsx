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
import {DetailRouteParams} from '../../services/typeProps';
import StarGroupComponent from '../../components/main/StarGroupComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {vh, vw} from '../../services/styleSheets';
import FooterAutumn from '../../components/FooterAutumn';

const DrawScreen = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<DetailRouteParams, 'DrawScreen'>>();
  const {data, index} = route.params;

  console.log(data, index);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, marginBottom: vh(2), paddingHorizontal: vw(5)}}>
          <Header />
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
        </View>
        <FooterAutumn showIcon1={false} showIcon2={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/mainSketh/backBtn.png')} />
      </TouchableOpacity>
      <StarGroupComponent
        starCount={2000}
        color="#EFBB00"
        borderColor="#FEF9BD"
      />
      <TouchableOpacity disabled>
        <Image source={require('../../assets/mainSketh/settingBtn.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default DrawScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: vh(2),
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
