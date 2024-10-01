import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>LoadingScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
