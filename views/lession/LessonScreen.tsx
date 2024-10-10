import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/useStatusBarCustom';
import {SafeAreaView} from 'react-native-safe-area-context';

const LessonScreen = () => {
  useStatusBar('#7CBFF9');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Lession Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LessonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CBFF9',
  },
});
