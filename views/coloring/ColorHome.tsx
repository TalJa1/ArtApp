/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import Header from '../../components/extra/Header';
import {vw, vh, centerAll} from '../../services/styleSheets';
import {ColorHomeData} from '../../services/renderData';
import {uploadIcon} from '../../assets/svgXml';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ColorHome = () => {
  useStatusBar('#EF99DA');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleButtonClick = (image: any, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setModalVisible(true);
  };

  const handleCloseAndNavigateModal = () => {
    setModalVisible(false);
    if (selectedImage !== null && selectedIndex !== null) {
      navigation.navigate('Coloring', {
        img: selectedImage,
        index: selectedIndex,
      });
    }
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingHorizontal: vw(5)}}>
          <Header
            img={require('../../assets/color/icon1.png')}
            title="Tô màu"
          />
          <View style={styles.dataContainer}>
            {ColorHomeData.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.btn}
                  key={index}
                  onPress={() => handleButtonClick(item, index)}>
                  <Image style={styles.img} source={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                {selectedImage && (
                  <Image style={styles.modalImage} source={selectedImage} />
                )}
                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    disabled
                    style={[styles.modalIconButton, centerAll]}>
                    {uploadIcon(vw(7), vw(7))}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.modalButton, centerAll]}
                    onPress={() => handleCloseAndNavigateModal()}>
                    <Text style={styles.modalButtonText}>Tô lại</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default ColorHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF99DA',
  },
  dataContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  btn: {
    marginVertical: vw(5),
  },
  img: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: vw(90),
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: vw(80),
    height: vw(80),
    resizeMode: 'contain',
    marginBottom: vh(2),
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    backgroundColor: '#EF99DA',
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '900',
  },
  modalIconButton: {
    backgroundColor: '#8ACE5D',
    padding: vw(4),
    borderRadius: 20,
  },
  modalIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
