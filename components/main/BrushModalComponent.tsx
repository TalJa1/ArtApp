import React, {useState} from 'react';
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
import {BrushModalProps} from '../../services/typeProps';
import StarModalGroupComponent from './StarModalGroupComponent';
import {loadData, saveData} from '../../services/storage';
import {BrushList} from '../../services/renderData';

const BrushModalComponent: React.FC<BrushModalProps> = ({
  modalVisible,
  setModalVisible,
  BrushListData,
  setBrushList,
}) => {
  const [selectedBrushIndex, setSelectedBrushIndex] = useState<number | null>(
    null,
  );

  const handleBrushClick = (index: number) => {
    setSelectedBrushIndex(index);
  };

  const handleBackClick = () => {
    setSelectedBrushIndex(null);
  };

  const handleActiveBrush = async () => {
    const newBrushList = BrushListData.map((brush, index) => {
      if (index === selectedBrushIndex) {
        return {
          ...brush,
          isAvailable: true,
        };
      } else {
        return brush;
      }
    });
    setBrushList(newBrushList);
    saveData('brushListStorage', newBrushList);

    loadData<number>('CoinsStorage')
      .then(data => {
        if (selectedBrushIndex !== null) {
          saveData('CoinsStorage', data - BrushList[selectedBrushIndex].price);
        }
      })
      .catch(() => {
        saveData('CoinsStorage', 2000);
      });
    setSelectedBrushIndex(null);
  };

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
          {selectedBrushIndex === null ? (
            <View style={styles.brushContainer}>
              {BrushListData.map((brush, index) => (
                <TouchableOpacity
                  key={index}
                  disabled={brush.isAvailable}
                  style={[
                    styles.brushButton,
                    brush.isAvailable
                      ? styles.activeBrush
                      : styles.inactiveBrush,
                  ]}
                  onPress={() => handleBrushClick(index)}>
                  <View style={styles.brushWrapper}>
                    {React.isValidElement(brush.icon) ? (
                      brush.icon
                    ) : (
                      <Text>Loading Icon</Text>
                    )}
                    {brush.isAvailable === false && (
                      <View style={styles.clockIconOverlay}>
                        {clockIcon(vw(7), vw(7))}
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View style={styles.selectedBrushContainer}>
              <View style={styles.selectedBrushWrapper}>
                {React.isValidElement(BrushListData[selectedBrushIndex].icon) ? (
                  <View style={{ width: vw(25), height: vw(25) }}>
                    {BrushListData[selectedBrushIndex].icon}
                  </View>
                ) : (
                  <Text>Loading Icon</Text>
                )}
              </View>
              <StarModalGroupComponent
                starCount={BrushListData[selectedBrushIndex].price}
                borderColor={selectedBrushIndex !== 2 ? '#E0E0E0' : '#FEF9BD'}
                color={selectedBrushIndex !== 2 ? '#999999' : '#EFBB00'}
              />
            </View>
          )}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              if (selectedBrushIndex !== null) {
                selectedBrushIndex !== 2
                  ? handleBackClick()
                  : handleActiveBrush();
              } else {
                setModalVisible(!modalVisible);
              }
            }}>
            <Text style={styles.closeButtonText}>
              {selectedBrushIndex !== null
                ? selectedBrushIndex !== 2
                  ? 'Trở lại'
                  : 'Mua'
                : 'Đóng'}
            </Text>
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
  selectedBrushContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: vh(3),
  },
  selectedBrushWrapper: {
    backgroundColor: '#E0E0E0',
    padding: vw(7),
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
});
