import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackBtn from './BackBtn';

const Header = () => {
  return (
    <View style={styles.container}>
      <BackBtn />
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
