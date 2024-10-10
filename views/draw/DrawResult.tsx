import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DrawResultProps} from '../../services/typeProps';

const DrawResult = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<DrawResultProps, 'DrawResult'>>();
  const {paths, drawIndex} = route.params;

  console.log('DrawResult', paths, drawIndex);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>DrawResult</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrawResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
