import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';

const Sketh = () => {
  useStatusBar('#FEF9BD');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View>
          <Text>Sketh</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  return <View></View>;
};

export default Sketh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9BD',
  },
});
