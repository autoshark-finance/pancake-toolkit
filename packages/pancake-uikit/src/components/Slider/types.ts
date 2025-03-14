import { BoxProps } from "../Box/types";

export default interface SliderProps extends BoxProps {
  thumbButtImgSrc: string;
  thumbImgSrc: string;
  name: string;
  min: number;
  max: number;
  value: number;
  step?: number | "any";
  onValueChanged: (newValue: number) => void;
  valueLabel?: string;
  disabled?: boolean;
}
