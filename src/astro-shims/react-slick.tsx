import type { ReactNode } from "react";

type SliderProps = {
  children?: ReactNode;
  className?: string;
};

export default function Slider({ children, className }: SliderProps) {
  return <div className={className}>{children}</div>;
}
