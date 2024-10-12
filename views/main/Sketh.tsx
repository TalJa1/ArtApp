/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {useFocusEffect} from '@react-navigation/native';
import {
  backIcon,
  gradeStarIcon,
  nextIcon,
  sketchBlockIcon,
} from '../../assets/svgXml';
import {ArtTabRenderProps, SketchArtItem} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';
import {SketchArtList} from '../../services/renderData';
import SketchModalComponent from '../../components/main/SketchModalComponent';
import FooterAutumn from '../../components/FooterAutumn';
import HeaderSketch from '../../components/HeaderSketch';

const Sketh = () => {
  useStatusBar('#FCEFAD');
  const [coins, setCoins] = useState<number>(0);

  const fetchData = async () => {
    await loadData<number>('CoinsStorage')
      .then(dataCoins => {
        setCoins(dataCoins);
      })
      .catch(() => {
        setCoins(2000);
        saveData('CoinsStorage', 2000);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5)}}>
          <HeaderSketch coins={coins} />
          <Main />
        </View>
        <FooterAutumn showIcon1={true} showIcon2={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

const Main: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [sketchRender, setSketchRender] =
    useState<(SketchArtItem | null)[]>(SketchArtList);

  const fetchData = async () => {
    await loadData<SketchArtItem[]>('sketchListStorage')
      .then(data => {
        const paddedData = [...data, ...Array(16 - data.length).fill(null)];
        setSketchRender(paddedData);
      })
      .catch(() => {
        const paddedData = [
          ...SketchArtList,
          ...Array(16 - SketchArtList.length).fill(null),
        ];
        saveData('sketchListStorage', SketchArtList);
        setSketchRender(paddedData);
      });
  };

  useFocusEffect(
    useCallback(() => {
      if (level === 1) {
        fetchData();
      } else {
        setSketchRender(Array(16).fill(null));
      }
    }, [level]),
  );

  const handlebackLevel = () => {
    if (level > 1) {
      setLevel(level - 1);
    }
  };

  const handlenextLevel = () => {
    if (level < 5) {
      setLevel(level + 1);
    }
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      dots.push(
        <View
          key={i}
          style={[
            styles.dot,
            {backgroundColor: i === level ? '#EE7F68' : '#E0E0E0'},
          ]}
        />,
      );
    }
    return dots;
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={handlebackLevel}>
          {backIcon(vw(7), vw(7))}
        </TouchableOpacity>
        <View style={styles.mainLevel}>
          <Text style={styles.levelTxt}>Level {level}</Text>
        </View>
        <TouchableOpacity onPress={handlenextLevel}>
          {nextIcon(vw(7), vw(7))}
        </TouchableOpacity>
      </View>
      <View style={styles.artGroup}>
        {sketchRender.map((item, index) => {
          var renderIndex = String(index + 1).padStart(2, '0');
          return (
            <View key={index} style={{alignItems: 'center'}}>
              <View
                style={[
                  styles.artNumberContainer,
                  item === null && {backgroundColor: '#585757'},
                ]}>
                <Text style={styles.artNumber}>{renderIndex}</Text>
              </View>
              <ArtTabRender data={item} index={index} />
            </View>
          );
        })}
      </View>
      <View style={styles.dotContainer}>{renderDots()}</View>
    </View>
  );
};

export const ArtTabRender: React.FC<ArtTabRenderProps> = ({data, index}) => {
  const [modalVisible, setModalVisible] = useState(false);

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
    setModalVisible(true);
  };

  return (
    <View style={styles.artTabRenderContainer}>
      {data !== null ? (
        <>
          <TouchableOpacity
            onPress={handleDraw}
            style={[styles.btnArt, centerAll]}>
            <View style={styles.starContainer}>{renderStars(data.star)}</View>
            <Image style={styles.img} source={data?.img} />
          </TouchableOpacity>
          <SketchModalComponent
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            data={data}
            index={index}
          />
        </>
      ) : (
        <View style={[styles.btnArt, centerAll, styles.disableBtn]}>
          {sketchBlockIcon(vw(7), vw(7))}
        </View>
      )}
    </View>
  );
};

export default Sketh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEFAD',
  },
  mainLevel: {
    backgroundColor: '#EE7F68',
    borderRadius: 20,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#DB664F',
    paddingHorizontal: vw(15),
    paddingVertical: vh(1),
  },
  levelTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  artTabRenderContainer: {
    width: vw(20),
  },
  artGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: vh(3),
    marginVertical: vh(3),
  },
  btnArt: {
    height: vh(12),
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 12,
  },
  artNumberContainer: {
    zIndex: 2,
    position: 'absolute',
    top: -vh(1.3),
    backgroundColor: '#FDD3A8',
    borderRadius: vw(20),
    borderWidth: 3,
    borderColor: 'black',
    paddingHorizontal: vw(4),
  },
  artNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 5,
    columnGap: vw(1),
  },
  disableBtn: {
    backgroundColor: '#999999',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  img: {
    width: vw(11),
    height: vw(11),
    resizeMode: 'contain',
  },
});
