import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {vw} from '../../services/styleSheets';

const StartScreen = () => {
  useStatusBar('#C8E589');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View>
          <Text>StartScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8E589',
  },
  headerContainer: {
    paddingHorizontal: vw(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
