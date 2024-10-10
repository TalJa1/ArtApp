import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackBtn from './BackBtn';
import {HeaderInterface} from '../../services/typeProps';
import {centerAll, vh, vw} from '../../services/styleSheets';

const Header: React.FC<HeaderInterface> = ({img, title}) => {
  return (
    <View style={styles.container}>
      <BackBtn />
      <View style={[styles.titleContainer, centerAll]}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Image style={styles.img} source={img} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vh(2),
  },
  titleContainer: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    paddingHorizontal: vw(5),
    paddingVertical: vh(0.6),
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#000000',
  },
  img: {
    width: vw(25),
    height: vw(25),
    resizeMode: 'contain',
    position: 'relative',
    top: vh(1),
  },
});
