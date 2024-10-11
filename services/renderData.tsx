/* eslint-disable no-bitwise */
import {
  brush1Icon,
  brush2Icon,
  brush3Icon,
  brush4Icon,
  brush5Icon,
  brush6Icon,
  ctrlYIcon,
  ctrlZIcon,
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

export const BrushTmpData = [
  brush1Icon(vw(12), vw(12)),
  brush2Icon(vw(12), vw(12)),
  brush3Icon(vw(12), vw(12)),
  brush4Icon(vw(12), vw(12)),
  brush5Icon(vw(12), vw(12)),
  brush6Icon(vw(12), vw(12)),
];

export const BrushList = [
  {isAvailable: true, price: 100},
  {isAvailable: true, price: 200},
  {isAvailable: false, price: 500},
  {isAvailable: false, price: 3000},
  {isAvailable: false, price: 4000},
  {isAvailable: false, price: 5000},
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

export const BtnGroupList1 = [
  {
    img: require('../assets/mainSketh/paintIcon.png'),
    icon: null,
    backColor: '#7CBFF9',
    borderColor: '#5CA7EF',
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

export const BtnGroupList2 = [
  {
    img: require('../assets/mainSketh/paintIcon.png'),
    icon: null,
    backColor: '#7CBFF9',
    borderColor: '#5CA7EF',
  },
  {
    img: null,
    icon: ctrlZIcon(vw(8), vw(8)),
    backColor: '#999999',
    borderColor: '#999999',
  },
  {
    img: null,
    icon: ctrlYIcon(vw(8), vw(8)),
    backColor: '#999999',
    borderColor: '#999999',
  },
  {
    img: null,
    icon: nextIcon(vw(8), vw(8), 'white'),
    backColor: '#EE7F68',
    borderColor: '#DB664F',
  },
];

export const colors = [
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF00FF',
  '#00FFFF',
  '#800000',
  '#008000',
  '#000080',
  '#808000',
  '#800080',
  '#008080',
  '#C0C0C0',
  '#808080',
  '#FFA500',
  '#A52A2A',
];

export const CoinsData = 2000;

export const SuggestionBtnGroupData = [
  {
    title: 'Xem hình thực tế',
    star: 200,
  },
  {
    title: 'Bỏ qua',
    star: 200,
  },
  {
    title: 'Hình học sử dụng',
    star: 200,
  },
];

export const darkenColor = (color: string, amount: number): string => {
  let usePound = false;

  if (color[0] === '#') {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);

  let r = (num >> 16) - amount;
  if (r < 0) {
    r = 0;
  } else if (r > 255) {
    r = 255;
  }

  let g = ((num >> 8) & 0x00ff) - amount;
  if (g < 0) {
    g = 0;
  } else if (g > 255) {
    g = 255;
  }

  let b = (num & 0x0000ff) - amount;
  if (b < 0) {
    b = 0;
  } else if (b > 255) {
    b = 255;
  }

  return (
    (usePound ? '#' : '') +
    ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')
  );
};

export const LessonHomeData = [
  require('../assets/lesson/1.png'),
  require('../assets/lesson/2.png'),
  require('../assets/lesson/3.png'),
  require('../assets/lesson/4.png'),
  require('../assets/lesson/5.png'),
  require('../assets/lesson/6.png'),
];

export const LessonDetailData = [
  {
    title: 'Hươu cao cổ',
    img: require('../assets/lesson/btn1.png'),
  },
  {
    title: 'Voi',
    img: require('../assets/lesson/btn2.png'),
  },
  {
    title: 'Hổ',
    img: require('../assets/lesson/btn3.png'),
  },
  {
    title: 'Thỏ',
    img: require('../assets/lesson/btn4.png'),
  },
  {
    title: 'Khỉ',
    img: require('../assets/lesson/btn5.png'),
  },
  {
    title: 'Sư tử',
    img: require('../assets/lesson/btn6.png'),
  },
];

export const ColorHomeData = [
  require('../assets/color/1.png'),
  require('../assets/color/2.png'),
  require('../assets/color/3.png'),
  require('../assets/color/4.png'),
  require('../assets/color/5.png'),
  require('../assets/color/6.png'),
];
