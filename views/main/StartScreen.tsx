import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';

const StartScreen = () => {
  useStatusBar('#C8E589');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>StartScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8E589',
  },
});
