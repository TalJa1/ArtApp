export interface StarGroupComponentProps {
  starCount: number;
}

export interface BrushModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  BrushList: JSX.Element[];
}
