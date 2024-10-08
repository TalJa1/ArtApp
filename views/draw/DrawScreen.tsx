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
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  BtnGroupItem,
  BtnGroupProps,
  DetailRouteParams,
  TabTitleProps,
} from '../../services/typeProps';
import {centerAll, vh, vw} from '../../services/styleSheets';
import FooterAutumn from '../../components/FooterAutumn';
import HeaderSketch from '../../components/HeaderSketch';
import {BtnGroupList} from '../../services/renderData';

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
        </View>
        <View style={{paddingHorizontal: vw(5)}}>
          <BtnGroup index={index} />
        </View>
        <FooterAutumn showIcon1={false} showIcon2={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

const BtnGroup: React.FC<BtnGroupProps> = () => {
  const BtnList: BtnGroupItem[] = BtnGroupList;
  const handlePress = () => {
    console.log('BtnGroup');
  };
  return (
    <View style={styles.btnGroupContainer}>
      {BtnList.map((item, index) => {
        return (
          <TouchableOpacity
            style={[
              styles.btnGroupItem,
              centerAll,
              {backgroundColor: item.backColor, borderColor: item.borderColor},
            ]}
            key={index}
            onPress={handlePress}>
            {item.img !== null ? (
              <Image
                style={{width: vw(9), height: vw(9), resizeMode: 'contain'}}
                source={item.img}
              />
            ) : (
              <>{item.icon}</>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
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
  btnGroupContainer: {
    flexDirection: 'row',
    columnGap: vw(2),
    backgroundColor: '#E5F0FE',
    paddingVertical: vh(1.5),
    paddingHorizontal: vw(4),
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  btnGroupItem: {
    width: vw(15),
    height: vw(15),
    borderRadius: 20,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});
