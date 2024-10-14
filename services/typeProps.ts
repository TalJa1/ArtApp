import {PathType} from '@benjeau/react-native-draw';

export interface StarGroupComponentProps {
  starCount: number;
  color?: string;
  borderColor?: string;
}

export interface BrushTmpData {
  icon: JSX.Element;
}
export interface BrushItem {
  isAvailable: boolean;
  price: number;
}

export interface BrushModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  BrushListData: BrushItem[];
  setBrushList: (list: BrushItem[]) => void;
  setCoins: (coins: number) => void;
  coins: number;
}

export interface SketchArtItem {
  img: any; // Use 'any' for require statements, or you can use a more specific type if you know it
  star: number;
  title: string;
}

export interface ArtTabRenderProps {
  data: SketchArtItem | null;
  index: number;
}

export interface SketchModalComponentProps {
  visible: boolean;
  onClose: () => void;
  data: SketchArtItem;
  index: number;
}

export type DetailRouteParams = {
  DrawScreen: {
    data: SketchArtItem;
    index: number;
  };
  Coloring: {
    img: any;
    index: number;
  };
  ResultColoring: {
    img: any;
    paths: PathType[];
    drawIndex: number;
  };
};

export interface FooterAutumnProps {
  showIcon1: boolean;
  showIcon2: boolean;
}

export interface TabTitleProps {
  data: SketchArtItem;
}

export interface BtnGroupProps {
  index: number;
  handleToggleBrushProperties: () => void;
  paths: PathType[];
  handleClear: () => void;
  handleUndo: () => void;
  img: any;
  handleCapture: () => void;
}

export interface BtnGroup1Props {
  index: number;
  handleToggleBrushProperties: () => void;
  paths: PathType[];
  handleToggleEraser: () => void;
  handleCapture: () => void;
}

export interface BtnGroupItem {
  img: any | null;
  icon: JSX.Element | null;
  backColor: string;
  borderColor: string;
}

export interface BrushPropertiesComponentProps {
  visibleBrushProperties: boolean;
  setVisibleBrushProperties: React.Dispatch<React.SetStateAction<boolean>>;
  BrushList: BrushItem[];
  setBrushList: (list: BrushItem[]) => void;
  brushColor: string;
  setBrushColor: React.Dispatch<React.SetStateAction<string>>;
  thickness: number;
  setThickness: React.Dispatch<React.SetStateAction<number>>;
}

export interface StartScreenHeaderProps {
  coins: number;
  setCoins: (coins: number) => void;
}

export interface StartScreenFooterProps {
  setCoins: (coins: number) => void;
  coins: number;
}

export type SuggestionProps = {
  SuggestionItem: {
    imgIndex: number;
  };
};

export interface HeaderSketchProps {
  coins: number;
}

export interface SuggestionBtnGroupItem {
  title: string;
  star: number;
}

export interface MainSuggestionProps {
  drawIndex: number;
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
}

export type RealSuggestionRoute = {
  RealSuggestion: {
    imgIndex: number;
  };
};

export type DrawResultProps = {
  DrawResult: {
    paths: PathType[];
    drawIndex: number;
    img: any;
  };
};

export interface SketchViewDrawResultProps {
  paths: PathType[];
  index: number;
  img: any;
}

export interface HeaderInterface {
  title: string;
  img: any;
}

export type LessonResultProps = {
  SuggestionItem: {
    paths: PathType[];
  };
};
