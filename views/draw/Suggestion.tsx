import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useRoute} from '@react-navigation/native';
import {SuggestionProps} from '../../services/typeProps';

const Suggestion = () => {
  const route = useRoute<RouteProp<SuggestionProps, 'SuggestionItem'>>();
  const {imgIndex} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Suggestion</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
