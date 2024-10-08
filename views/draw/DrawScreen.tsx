import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DetailRouteParams} from '../../services/typeProps';

const DrawScreen = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<DetailRouteParams, 'DrawScreen'>>();
  const {data, index} = route.params;

  console.log(data, index);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>DrawScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrawScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
