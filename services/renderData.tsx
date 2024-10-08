import {
  brush1Icon,
  brush2Icon,
  brush3Icon,
  brush4Icon,
  brush5Icon,
  brush6Icon,
  nextIcon,
  questionIcon,
  redoIcon,
} from '../assets/svgXml';
import {vw} from './styleSheets';

export const FourBtn = [
  require('../assets/start/shoppingBtn.png'),
  require('../assets/start/multiBtn.png'),
  require('../assets/start/cartBtn.png'),
  require('../assets/start/penListBtn.png'),
];

export const BrushList = [
  {icon: brush1Icon(vw(12), vw(12)), isAvailable: true},
  {icon: brush2Icon(vw(12), vw(12)), isAvailable: true},
  {icon: brush3Icon(vw(12), vw(12)), isAvailable: false},
  {icon: brush4Icon(vw(12), vw(12)), isAvailable: false},
  {icon: brush5Icon(vw(12), vw(12)), isAvailable: false},
  {icon: brush6Icon(vw(12), vw(12)), isAvailable: false},
];

export const SketchArtList = [
  {
    img: require('../assets/mainSketh/sketch/moon.png'),
    star: 3,
    title: 'Mặt Trăng',
  },
  {
    img: require('../assets/mainSketh/sketch/sky.png'),
    star: 2,
    title: 'Bầu Trời',
  },
  {
    img: require('../assets/mainSketh/sketch/earth.png'),
    star: 3,
    title: 'Trái Đất',
  },
  {
    img: require('../assets/mainSketh/sketch/cake.png'),
    star: 1,
    title: 'Bánh',
  },
  {
    img: require('../assets/mainSketh/sketch/octobus.png'),
    star: 3,
    title: 'Bạch Tuộc',
  },
  {
    img: require('../assets/mainSketh/sketch/fish1.png'),
    star: 3,
    title: 'Cá hồng',
  },
  {
    img: require('../assets/mainSketh/sketch/fish2.png'),
    star: 3,
    title: 'Cá vàng',
  },
  {
    img: require('../assets/mainSketh/sketch/iceCream.png'),
    star: 0,
    title: 'Kem',
  },
  {
    img: require('../assets/mainSketh/sketch/spaceShip.png'),
    star: 0,
    title: 'Tàu Vũ Trụ',
  },
];

export const BtnGroupList = [
  {
    img: require('../assets/mainSketh/paintIcon.png'),
    icon: null,
    backColor: '#7CBFF9',
    borderColor: '#5CA7EF',
  },
  {
    img: null,
    icon: questionIcon(vw(8), vw(8)),
    backColor: '#EFBB00',
    borderColor: '#F09D3C',
  },
  {
    img: null,
    icon: redoIcon(vw(8), vw(8)),
    backColor: '#EF99DA',
    borderColor: '#DB80C2',
  },
  {
    img: null,
    icon: nextIcon(vw(8), vw(8), 'white'),
    backColor: '#EE7F68',
    borderColor: '#DB664F',
  },
];
