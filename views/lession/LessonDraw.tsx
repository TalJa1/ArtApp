/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {centerAll, vh, vw} from '../../services/styleSheets';
import BackBtn from '../../components/extra/BackBtn';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Canvas, CanvasRef, DrawingTool} from '@benjeau/react-native-draw';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {DEFAULT_COLORS} from '@benjeau/react-native-draw-extras';
import {BrushItem, BtnGroup1Props, BtnGroupItem} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';
import {BrushList, BtnGroupList1} from '../../services/renderData';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BrushPropertiesComponent from '../../components/draw/BrushPropertiesComponent';

const LessonDraw = () => {
  useStatusBar('#899AF8');
  const canvasRef = useRef<CanvasRef>(null);

  const [color, setColor] = useState(DEFAULT_COLORS[0][0][0]);
  const [thickness, setThickness] = useState(5);
  const [tool, setTool] = useState(DrawingTool.Brush);
  const [visibleBrushProperties, setVisibleBrushProperties] = useState(false);
  const [brush, setBrush] = useState<BrushItem[]>([]);
  const [paths, setPaths] = useState<any[]>([]);
  console.log('paths', paths);

  const handleToggleEraser = () => {
    setTool(prev =>
      prev === DrawingTool.Brush ? DrawingTool.Eraser : DrawingTool.Brush,
    );
  };

  const fetchData = async () => {
    await loadData<BrushItem[]>('brushListStorage')
      .then(dataBrush => {
        setBrush(dataBrush);
      })
      .catch(() => {
        saveData('brushListStorage', BrushList);
        setBrush(BrushList);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  const [overlayOpacity] = useState(new Animated.Value(0));
  const handleToggleBrushProperties = () => {
    if (!visibleBrushProperties) {
      setVisibleBrushProperties(true);

      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setVisibleBrushProperties(false);
      });
    }
  };

  const handlePathsChange = (newPaths: any[]) => {
    setPaths(newPaths);
    // Optionally, save the paths to storage or perform other actions
    // saveData('userPaths', newPaths);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.top}>
            <BackBtn />
            <View style={styles.drawingIdea} />
          </View>
          <View style={styles.bottom}>
            <GestureHandlerRootView>
              <View style={styles.canvasContainer}>
                <Canvas
                  ref={canvasRef}
                  height={vh(45)}
                  width={vw(90)}
                  color={color}
                  thickness={thickness}
                  opacity={100}
                  tool={tool}
                  onPathsChange={handlePathsChange}
                />
              </View>
            </GestureHandlerRootView>
            <View>
              <BtnGroup
                index={0}
                handleToggleEraser={handleToggleEraser}
                handleToggleBrushProperties={handleToggleBrushProperties}
                paths={paths}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      {visibleBrushProperties && (
        <BrushPropertiesComponent
          visibleBrushProperties={visibleBrushProperties}
          setVisibleBrushProperties={setVisibleBrushProperties}
          BrushList={brush}
          setBrushList={setBrush}
          brushColor={color}
          setBrushColor={setColor}
          thickness={thickness}
          setThickness={setThickness}
        />
      )}
    </SafeAreaView>
  );
};

const BtnGroup: React.FC<BtnGroup1Props> = ({
  handleToggleEraser,
  handleToggleBrushProperties,
  paths,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const BtnList: BtnGroupItem[] = BtnGroupList1;
  const handlePress = (i: number) => {
    switch (i) {
      case 0:
        handleToggleBrushProperties();
        break;
      case 1:
        handleToggleEraser();
        break;
      case 2:
        navigation.navigate('LessonResult', {paths: paths});
        break;
    }
  };
  return (
    <View style={styles.btnGroupContainer}>
      {BtnList.map((item, indexLoop) => {
        return (
          <TouchableOpacity
            style={[
              styles.btnGroupItem,
              centerAll,
              {backgroundColor: item.backColor, borderColor: item.borderColor},
            ]}
            key={indexLoop}
            onPress={() => handlePress(indexLoop)}>
            {item.img !== null ? (
              <Image
                style={{width: vw(9), height: vw(9), resizeMode: 'contain'}}
                source={item.img}
              />
            ) : (
              <>{item.icon}</>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LessonDraw;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#899AF8'},
  top: {
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
    rowGap: vh(2),
    height: vh(35),
    width: vw(100),
    overflow: 'hidden',
  },
  drawingIdea: {
    height: '70%',
    width: '100%',
    borderWidth: 3,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  bottom: {
    flex: 1,
    borderWidth: 4,
    borderColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#EFBB00',
    alignItems: 'center',
    paddingVertical: vh(2),
  },
  btnGroupContainer: {
    flexDirection: 'row',
    width: vw(90),
    backgroundColor: '#E5F0FE',
    paddingVertical: vh(1.5),
    borderRadius: 20,
    justifyContent: 'space-evenly',
  },
  btnGroupItem: {
    width: vw(15),
    height: vw(15),
    borderRadius: 20,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  canvasContainer: {
    borderRadius: 20, // Adjust the value as needed
    overflow: 'hidden', // Ensure the children respect the border radius
    width: vw(90), // Match the Canvas width
    height: vh(45), // Match the Canvas height
  },
});
