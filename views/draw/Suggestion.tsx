import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Suggestion = () => {
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
