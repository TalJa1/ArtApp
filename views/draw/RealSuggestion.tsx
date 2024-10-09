/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vw} from '../../services/styleSheets';
import {RealSuggestionRoute} from '../../services/typeProps';
import {RouteProp, useRoute} from '@react-navigation/native';

const RealSuggestion = () => {
  const route = useRoute<RouteProp<RealSuggestionRoute, 'RealSuggestion'>>();
  const {imgIndex} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5)}}>
          <Text>RealSuggestion</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RealSuggestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
