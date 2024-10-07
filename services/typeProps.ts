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
