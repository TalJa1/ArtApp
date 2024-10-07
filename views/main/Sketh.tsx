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
import StarGroupComponent from '../../components/main/StarGroupComponent';
import {vh, vw} from '../../services/styleSheets';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Sketh = () => {
  useStatusBar('#FCEFAD');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5)}}>
          <Header />
        </View>
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
      <TouchableOpacity>
        <Image source={require('../../assets/mainSketh/settingBtn.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Sketh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEFAD',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: vh(2),
  },
});
