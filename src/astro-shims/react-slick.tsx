import { Children } from "react";
import type { ReactNode } from "react";

type SliderProps = {
  children?: ReactNode;
  className?: string;
};

export default function Slider({ children, className }: SliderProps) {
  const slides = Children.toArray(children);

  return (
    <div className={`slick-slider ${className ?? ""}`.trim()}>
      <div className="slick-list">
        <div className="slick-track">{slides}</div>
      </div>
    </div>
  );
}
