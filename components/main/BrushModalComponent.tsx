import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {vh, vw} from '../../services/styleSheets';
import {clockIcon} from '../../assets/svgXml';
import { BrushModalProps } from '../../services/typeProps';


const BrushModalComponent: React.FC<BrushModalProps> = ({
  modalVisible,
  setModalVisible,
  BrushList,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image
            style={styles.penlistIconImg}
            source={require('../../assets/start/penlistIcon.png')}
          />
          <View style={styles.brushContainer}>
            {BrushList.map((brush, index) => (
              <TouchableOpacity
                key={index}
                disabled={index === 2 || index === 3 ? false : true}
                style={[
                  styles.brushButton,
                  index === 0 || index === 1
                    ? styles.activeBrush
                    : styles.inactiveBrush,
                ]}>
                <View style={styles.brushWrapper}>
                  {brush}
                  {index !== 0 && index !== 1 && (
                    <View style={styles.clockIconOverlay}>
                      {clockIcon(vw(7), vw(7))}
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.closeButtonText}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default BrushModalComponent;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: vw(90),
    height: vh(60),
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    paddingVertical: vh(7),
    justifyContent: 'space-between',
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: '#8ACE5D',
    paddingVertical: vh(0.6),
    width: '60%',
    borderRadius: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '900',
  },
  penlistIconImg: {
    zIndex: 2,
    width: vw(18),
    height: vw(18),
    resizeMode: 'cover',
    position: 'absolute',
    top: vh(-4),
  },
  brushContainer: {
    paddingHorizontal: vw(5),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    rowGap: vh(2),
  },
  brushButton: {
    padding: vw(4),
    borderRadius: vw(5),
  },
  activeBrush: {
    backgroundColor: '#C8E589',
  },
  inactiveBrush: {
    backgroundColor: '#3A3A3A',
    opacity: 0.5,
  },
  brushWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockIconOverlay: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
