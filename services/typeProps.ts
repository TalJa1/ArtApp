export interface StarGroupComponentProps {
  starCount: number;
  color?: string;
  borderColor?: string;
}

export interface BrushModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  BrushList: JSX.Element[];
}
