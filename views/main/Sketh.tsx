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
import StarGroupComponent from '../../components/main/StarGroupComponent';
import {centerAll, vh, vw} from '../../services/styleSheets';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  backIcon,
  gradeStarIcon,
  nextIcon,
  sketchBlockIcon,
} from '../../assets/svgXml';
import {ArtTabRenderProps, SketchArtItem} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';
import {SketchArtList} from '../../services/renderData';

const Sketh = () => {
  useStatusBar('#FCEFAD');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: vw(5)}}>
          <Header />
          <Main />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const Footer: React.FC = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={[styles.footerImg, styles.footerImg1]}
        source={require('../../assets/mainSketh/footer1.png')}
      />
      <Image
        style={[styles.footerImg, styles.footerImg2]}
        source={require('../../assets/mainSketh/footer2.png')}
      />
      <Image
        style={styles.icon1}
        source={require('../../assets/mainSketh/icon1.png')}
      />
    </View>
  );
};

const Main: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [sketchRender, setSketchRender] = useState<(SketchArtItem | null)[]>(
    Array(16).fill(null),
  );

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
          return (
            <View key={index} style={{alignItems: 'center'}}>
              <View
                style={[
                  styles.artNumberContainer,
                  item === null && {backgroundColor: '#585757'},
                ]}>
                <Text style={styles.artNumber}>{index + 1}</Text>
              </View>
              <ArtTabRender data={item} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export const ArtTabRender: React.FC<ArtTabRenderProps> = ({data}) => {
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

  return (
    <View style={styles.artTabRenderContainer}>
      {data !== null ? (
        <TouchableOpacity style={[styles.btnArt, centerAll]}>
          <View style={styles.starContainer}>{renderStars(data.star)}</View>
          <Image source={data?.img} />
        </TouchableOpacity>
      ) : (
        <View style={[styles.btnArt, centerAll, styles.disableBtn]}>
          {sketchBlockIcon(vw(7), vw(7))}
        </View>
      )}
    </View>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/mainSketh/backBtn.png')} />
      </TouchableOpacity>
      <StarGroupComponent
        starCount={2000}
        color="#EFBB00"
        borderColor="#FEF9BD"
      />
      <TouchableOpacity>
        <Image source={require('../../assets/mainSketh/settingBtn.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Sketh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEFAD',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: vh(2),
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
  footerImg: {
    width: vw(100),
    height: vh(15),
    resizeMode: 'cover',
  },
  icon1: {
    zIndex: 3,
    position: 'absolute',
    bottom: vh(3),
    right: vw(3),
  },
  footerImg1: {zIndex: 2},
  footerImg2: {zIndex: 1, position: 'absolute', bottom: 0},
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
    paddingHorizontal: vw(5),
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
});
