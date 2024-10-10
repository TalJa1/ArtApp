/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  DrawResultProps,
  SketchViewDrawResultProps,
} from '../../services/typeProps';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Canvas} from '@benjeau/react-native-draw';

const DrawResult = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<DrawResultProps, 'DrawResult'>>();
  const {paths, drawIndex} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <SketchView paths={paths} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SketchView: React.FC<SketchViewDrawResultProps> = ({paths}) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Canvas enabled={false} initialPaths={paths} />
    </GestureHandlerRootView>
  );
};

export default DrawResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
