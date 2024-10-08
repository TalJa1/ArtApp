/* eslint-disable react-native/no-inline-styles */
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SketchModalComponentProps} from '../../services/typeProps';
import {gradeStarIcon, uploadIcon} from '../../assets/svgXml';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SketchModalComponent: React.FC<SketchModalComponentProps> = ({
  onClose,
  visible,
  data,
  index,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  var renderIndex = String(index + 1).padStart(2, '0');

  const renderStars = (starCount: number) => {
    const stars = [];
    for (let i = 0; i < 3; i++) {
      stars.push(
        <View key={i}>
          {gradeStarIcon(10, 10, i < starCount ? '#E79F1C' : 'grey')}
        </View>,
      );
    }
    return stars;
  };

  const handleDraw = () => {
    onClose();
    navigation.navigate('DrawScreen', {data: data, index: index});
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.indexContainer}>
                <Text style={styles.index}>{renderIndex}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: vw(2),
                }}>
                <Text style={styles.txt}>+200</Text>
                {renderStars(data.star)}
              </View>
              <Image style={styles.img} source={data.img} />
              <View style={{flexDirection: 'row', columnGap: vw(2)}}>
                <TouchableOpacity style={styles.uploadBtn}>
                  {uploadIcon(vw(7), vw(7))}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleDraw}
                  style={[styles.drawBtn, centerAll]}>
                  <Text style={styles.drawTxt}>
                    Vẽ {data.star > 0 && 'lại'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SketchModalComponent;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    paddingHorizontal: vw(5),
    paddingVertical: vh(3),
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  txt: {
    color: '#000000',
    fontSize: 20,
  },
  img: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'contain',
    marginVertical: vh(2),
  },
  uploadBtn: {
    backgroundColor: '#8ACE5D',
    padding: vw(3),
    borderRadius: 20,
    borderColor: '#84BF58',
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  drawBtn: {
    backgroundColor: '#EF99DA',
    flexGrow: 1,
    borderRadius: 20,
    borderColor: '#DB80C2',
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  drawTxt: {
    fontSize: 32,
    fontWeight: '900',
    color: 'white',
  },
  index: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  indexContainer: {
    position: 'absolute',
    top: -vh(2.4),
    backgroundColor: '#FDD3A8',
    paddingHorizontal: vw(8),
    borderRadius: 16,
    borderWidth: 3,
    borderColor: 'black',
  },
});
