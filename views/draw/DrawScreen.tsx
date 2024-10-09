/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
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
  TabTitleProps,
} from '../../services/typeProps';
import {centerAll, vh, vw} from '../../services/styleSheets';
import FooterAutumn from '../../components/FooterAutumn';
import HeaderSketch from '../../components/HeaderSketch';
import {BrushList, BtnGroupList} from '../../services/renderData';
import {Canvas, CanvasRef, DrawingTool} from '@benjeau/react-native-draw';
import {DEFAULT_COLORS} from '@benjeau/react-native-draw-extras';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BrushPropertiesComponent from '../../components/draw/BrushPropertiesComponent';
import {loadData, saveData} from '../../services/storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const DrawScreen = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<DetailRouteParams, 'DrawScreen'>>();
  const {data, index} = route.params;

  const canvasRef = useRef<CanvasRef>(null);

  const [color, setColor] = useState(DEFAULT_COLORS[0][0][0]);
  const [thickness, setThickness] = useState(5);
  const [tool, setTool] = useState(DrawingTool.Brush);
  const [visibleBrushProperties, setVisibleBrushProperties] = useState(false);
  const [brush, setBrush] = useState<BrushItem[]>([]);

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, marginBottom: vh(2), paddingHorizontal: vw(5)}}>
          <HeaderSketch />
          <TabTitle data={data} />
          <GestureHandlerRootView style={{flex: 1}}>
            <Canvas
              ref={canvasRef}
              height={vh(50)}
              color={color}
              thickness={thickness}
              opacity={100}
              tool={tool}
            />
          </GestureHandlerRootView>
        </View>
        <View style={{paddingHorizontal: vw(5)}}>
          <BtnGroup
            index={index}
            handleToggleEraser={handleToggleEraser}
            handleToggleBrushProperties={handleToggleBrushProperties}
          />
        </View>
        <FooterAutumn showIcon1={false} showIcon2={false} />
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

const BtnGroup: React.FC<BtnGroupProps> = ({
  handleToggleEraser,
  handleToggleBrushProperties,
  index,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const BtnList: BtnGroupItem[] = BtnGroupList;
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
        console.log('Finish');
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

const TabTitle: React.FC<TabTitleProps> = ({data}) => {
  return (
    <View style={styles.iconGroup}>
      <View style={styles.iconGroupImgContainer}>
        <Image
          style={styles.iconGroupImg}
          source={require('../../assets/mainSketh/drawIcon.png')}
        />
      </View>
      <View style={styles.iconGroupTxtContainer}>
        <Text style={styles.iconGroupTxt}>Hãy vẽ {data.title}</Text>
      </View>
    </View>
  );
};

export default DrawScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  iconGroupImgContainer: {
    zIndex: 2,
  },
  iconGroupImg: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
  },
  iconGroupTxtContainer: {
    backgroundColor: '#E5F0FE',
    paddingVertical: vh(1.5),
    paddingHorizontal: vw(4),
    borderRadius: vw(25),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconGroupTxt: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
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
