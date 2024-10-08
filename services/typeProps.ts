export interface StarGroupComponentProps {
  starCount: number;
  color?: string;
  borderColor?: string;
}

export interface BrushItem {
  icon: JSX.Element;
  isAvailable: boolean;
}

export interface BrushModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  BrushList: BrushItem[];
  setBrushList: (list: BrushItem[]) => void;
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
};

export interface FooterAutumnProps {
  showIcon1: boolean;
  showIcon2: boolean;
}
