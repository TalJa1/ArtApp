/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  Image,
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

const Coloring = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<DetailRouteParams, 'Coloring'>>();
  const {img, index} = route.params;
  const canvasRef = useRef<CanvasRef>(null);

  const [color, setColor] = useState(DEFAULT_COLORS[0][0][0]);
  const [thickness, setThickness] = useState(5);
  const [tool, setTool] = useState(DrawingTool.Brush);
  const [visibleBrushProperties, setVisibleBrushProperties] = useState(false);
  const [brush, setBrush] = useState<BrushItem[]>([]);
  const [coins, setCoins] = useState<number>(0);
  const [paths, setPaths] = useState<any[]>([]);

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
      <View style={{flex: 1, paddingHorizontal: vw(5), marginVertical: vh(2)}}>
        <BackBtn />
        <GestureHandlerRootView style={{flex: 1}}>
          <Canvas
            ref={canvasRef}
            height={vh(50)}
            color={color}
            thickness={thickness}
            opacity={100}
            tool={tool}
            onPathsChange={handlePathsChange}
          />
        </GestureHandlerRootView>
        <BtnGroup
          index={0}
          handleToggleEraser={handleToggleEraser}
          handleToggleBrushProperties={handleToggleBrushProperties}
          paths={paths}
        />
      </View>
    </SafeAreaView>
  );
};

const BtnGroup: React.FC<BtnGroupProps> = ({
  handleToggleEraser,
  handleToggleBrushProperties,
  index,
  paths,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const BtnList: BtnGroupItem[] = BtnGroupList2;
  const handlePress = (i: number) => {
    switch (i) {
      case 0:
        handleToggleBrushProperties();
        break;
      case 1:
        navigation.navigate('Suggestion', {imgIndex: index});
        break;
      case 2:
        handleToggleEraser();
        break;
      case 3:
        navigation.navigate('DrawResult', {paths: paths, drawIndex: index});
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
