/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  BrushItem,
  BtnGroupItem,
  BtnGroupProps,
  DetailRouteParams,
} from '../../services/typeProps';
import {centerAll, vh, vw} from '../../services/styleSheets';
import BackBtn from '../../components/extra/BackBtn';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Canvas, CanvasRef, DrawingTool} from '@benjeau/react-native-draw';
import {loadData, saveData} from '../../services/storage';
import {BrushList, BtnGroupList2} from '../../services/renderData';
import {DEFAULT_COLORS} from '@benjeau/react-native-draw-extras';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BrushPropertiesComponent from '../../components/draw/BrushPropertiesComponent';
import ViewShot, {captureRef} from 'react-native-view-shot';

const Coloring = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<DetailRouteParams, 'Coloring'>>();
  const {img, index} = route.params;
  const canvasRef = useRef<CanvasRef>(null);
  const viewShotRef = useRef(null);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [color, setColor] = useState(DEFAULT_COLORS[0][0][0]);
  const [thickness, setThickness] = useState(5);
  const [visibleBrushProperties, setVisibleBrushProperties] = useState(false);
  const [brush, setBrush] = useState<BrushItem[]>([]);
  const [paths, setPaths] = useState<any[]>([]);

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
  };

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  const handleCapture = async () => {
    try {
      const uri = await captureRef(viewShotRef, {
        format: 'png',
        quality: 1,
      });
      navigation.navigate('ResultColoring', {
        img: uri,
        paths: paths,
        drawIndex: index,
      });
    } catch (error) {
      console.error('Failed to capture screenshot', error);
    }
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View
          style={{flex: 1, paddingHorizontal: vw(5), marginVertical: vh(2)}}>
          <BackBtn />
          <ViewShot
            ref={viewShotRef}
            options={{format: 'png', quality: 1}}
            style={{flex: 1}}>
            <View style={styles.canvasContainer}>
              <ImageBackground
                source={img} // Your image as the background
                style={styles.imageBackground}
                imageStyle={styles.imageStyle}>
                {/* Canvas placed on top of the image */}
                <Canvas
                  ref={canvasRef}
                  height={vh(50)} // You can adjust based on your UI
                  color={color}
                  thickness={thickness}
                  tool={DrawingTool.Brush}
                  onPathsChange={handlePathsChange}
                  opacity={100} // Keep opacity at 100% for the brush strokes
                  style={styles.canvas}
                />
              </ImageBackground>
            </View>
          </ViewShot>
          <BtnGroup
            index={index}
            handleToggleBrushProperties={handleToggleBrushProperties}
            paths={paths}
            handleClear={handleClear}
            handleUndo={handleUndo}
            handleCapture={handleCapture}
            img={undefined}
          />
        </View>
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
    </GestureHandlerRootView>
  );
};

const BtnGroup: React.FC<BtnGroupProps> = ({
  handleToggleBrushProperties,
  handleClear,
  handleUndo,
  handleCapture,
}) => {
  const BtnList: BtnGroupItem[] = BtnGroupList2;
  const handlePress = (i: number) => {
    switch (i) {
      case 0:
        handleToggleBrushProperties();
        break;
      case 1:
        handleUndo();
        break;
      case 2:
        handleClear();
        break;
      case 3:
        handleCapture();
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

export default Coloring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  canvasContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'contain',
  },
  canvas: {
    backgroundColor: 'transparent',
  },
  btnGroupContainer: {
    flexDirection: 'row',
    columnGap: vw(2),
    backgroundColor: '#E5F0FE',
    paddingVertical: vh(1.5),
    paddingHorizontal: vw(4),
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  btnGroupItem: {
    width: vw(15),
    height: vw(15),
    borderRadius: 20,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});
