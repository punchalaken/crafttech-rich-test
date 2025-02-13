export interface TextEditorProps {
  setIsOpen: (isOpen: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  height: number;
  width: number;
  ref: React.RefObject<HTMLDivElement>;
  id: string;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
}
