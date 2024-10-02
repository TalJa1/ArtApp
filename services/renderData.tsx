import {
  brush1Icon,
  brush2Icon,
  brush3Icon,
  brush4Icon,
  brush5Icon,
  brush6Icon,
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
  {icon: brush5Icon(vw(12), vw(12)), isAvailable: true},
  {icon: brush6Icon(vw(12), vw(12)), isAvailable: true},
];
