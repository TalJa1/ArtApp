import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';

const LessonDetail = () => {
  useStatusBar('#7CBFF9');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>LessonDetail</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LessonDetail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#7CBFF9'},
});
