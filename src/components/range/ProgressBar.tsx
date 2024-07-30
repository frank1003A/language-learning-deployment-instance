import { Line } from "rc-progress";
import React from "react";

type DisplayProps = {
  starCount?: number;
  percent: number;
  strokeWidth: number;
  strokeColor: string;
  starWidth?: number;
};

const ProgressBar: React.FC<DisplayProps> = ({
  starCount,
  percent,
  strokeWidth,
  strokeColor,
  starWidth,
}) => {
  return (
    <div>
      {/* PROGRESS BAR DISPLAY */}
      <Line
        percent={percent}
        strokeWidth={strokeWidth}
        strokeColor={strokeColor}
        trailColor="transparent"
        className="w-full rounded-full px-[1px]"
        style={{ border: `1px solid ${strokeColor}` }}
      />
    </div>
  );
};

export default ProgressBar;
