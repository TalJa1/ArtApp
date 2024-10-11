import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';

const ColorHome = () => {
  useStatusBar('#EF99DA');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>ColorHome</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ColorHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF99DA',
  },
});
