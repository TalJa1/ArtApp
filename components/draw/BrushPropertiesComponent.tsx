/* eslint-disable react-native/no-inline-styles */
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {BrushPropertiesComponentProps} from '../../services/typeProps';
import {clockIcon, penIcon} from '../../assets/svgXml';
import {centerAll, vh, vw} from '../../services/styleSheets';
import Slider from '@react-native-community/slider';
import {BrushTmpData, colors} from '../../services/renderData';

const BrushPropertiesComponent: React.FC<BrushPropertiesComponentProps> = ({
  BrushList,
  setVisibleBrushProperties,
  visibleBrushProperties,
  brushColor,
  setThickness,
  thickness,
  setBrushColor,
}) => {
  const [selectedBrushIndex, setSelectedBrushIndex] = useState<number | null>(
    null,
  );
  const [selectedColor, setSelectedColor] = useState<string>(brushColor);
  const [selectedButton, setSelectedButton] = useState<string>('color');

  const handleBrushClick = (index: number) => {
    setSelectedBrushIndex(index);
  };

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    setBrushColor(color);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibleBrushProperties}
      onRequestClose={() => {
        setVisibleBrushProperties(!visibleBrushProperties);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.topBtnGroup}>
            <TouchableOpacity
              style={[
                styles.btnSetColor,
                {backgroundColor: brushColor},
                selectedButton === 'color' && styles.selectedButton,
              ]}
              onPress={() => handleButtonClick('color')}
            />
            <TouchableOpacity
              style={[
                styles.penlistIconWrapper,
                selectedButton === 'penlist' && styles.selectedButton,
                selectedButton === 'penlist' && {backgroundColor: '#C8E589'},
                centerAll,
              ]}
              onPress={() => handleButtonClick('penlist')}>
              {penIcon(vw(7), vw(7))}
            </TouchableOpacity>
          </View>
          {selectedButton === 'color' ? (
            <View style={styles.colorContainer}>
              {colors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.colorButton,
                    {backgroundColor: color},
                    selectedColor === color && styles.selectedColor,
                  ]}
                  onPress={() => handleColorClick(color)}
                />
              ))}
            </View>
          ) : (
            <View>
              <View style={styles.brushContainer}>
                {BrushList.map((brush, index) => (
                  <TouchableOpacity
                    key={index}
                    disabled={brush.isAvailable === false}
                    style={[
                      styles.brushButton,
                      brush.isAvailable
                        ? styles.activeBrush
                        : styles.inactiveBrush,
                      selectedBrushIndex === index && styles.selectedBrush,
                    ]}
                    onPress={() => handleBrushClick(index)}>
                    <View style={styles.brushWrapper}>
                      {BrushTmpData[index]}
                      {brush.isAvailable === false && (
                        <View style={styles.clockIconOverlay}>
                          {clockIcon(vw(7), vw(7))}
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
              <View>
                <Text
                  style={{
                    paddingTop: vh(2),
                    color: 'black',
                    fontSize: 24,
                    fontWeight: '800',
                    textAlign: 'center',
                  }}>
                  Kích thước
                </Text>
                <Slider
                  style={{paddingVertical: vh(2)}}
                  minimumValue={1}
                  maximumValue={100}
                  minimumTrackTintColor="#84BF58"
                  maximumTrackTintColor="#E0E0E0"
                  thumbTintColor="#84BF58"
                  value={thickness}
                  onValueChange={value => setThickness(Number(value))}
                />
              </View>
            </View>
          )}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setVisibleBrushProperties(!visibleBrushProperties);
            }}>
            <Text style={styles.closeButtonText}>Xong</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default BrushPropertiesComponent;

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
    backgroundColor: '#E5F0FE',
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    paddingTop: vh(7),
    paddingBottom: vh(1),
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
  topBtnGroup: {
    zIndex: 2,
    position: 'absolute',
    top: vh(-4),
    flexDirection: 'row',
    columnGap: vw(2),
    alignItems: 'center',
  },
  btnSetColor: {
    width: vw(12),
    height: vw(12),
    borderRadius: vw(18),
    borderWidth: 3,
    borderColor: 'black',
  },
  penlistIconWrapper: {
    width: vw(12),
    height: vw(12),
    borderRadius: vw(18),
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: '#999999',
  },
  selectedButton: {
    width: vw(18),
    height: vw(18),
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
    backgroundColor: 'transparent',
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
  selectedBrush: {
    backgroundColor: '#C8E589',
    borderColor: '#84BF58',
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: vh(2),
  },
  colorButton: {
    width: vw(15),
    height: vw(15),
    margin: vw(1),
    borderRadius: 15,
  },
  selectedColor: {
    borderColor: 'black',
    borderWidth: 2,
  },
});
