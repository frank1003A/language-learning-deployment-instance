import Image from "next/image";

import ProgressBar from "../ProgressBar";

type DisplayProperties = {
  starCount: number;
  percent: number;
  strokeWidth: number;
  strokeColor: string;
  starWidth: number;
};

const LevelProgress: React.FC<DisplayProperties> = ({
  starCount,
  percent,
  strokeWidth,
  strokeColor,
  starWidth,
}) => {
  const imageUrl = "/images/progress-star.svg";

  // Limit the number of stars to a maximum of 5
  const minStars = 1; // The minimum number of stars
  const maxStars = 5; // The maximum number of stars

  const starNumber = Math.min(Math.max(starCount ?? 0, minStars), maxStars);

  return (
    <div
      className="flex w-full max-w-[645px] flex-col gap-[20px] rounded-[12px] px-[24px] py-[16px]"
      style={{
        border: `${starNumber > 1 ? "0.8px" : "3px"} solid ${starNumber > 1 ? "#B6B6B6" : strokeColor}`,
      }}
    >
      {/* STAR DISPLAY */}
      <div className="flex items-center gap-2">
        {starCount &&
          Array.from({ length: starNumber }, (_, index) => (
            <Image
              src={imageUrl}
              alt="star logo"
              key={index}
              width={starWidth}
              height={starWidth}
            />
          ))}
      </div>
      {/* LEVEL NAME */}
      <p
        className={`text-[24px] font-normal capitalize leading-[24px] text-white`}
        style={{ color: `${starNumber === 1 && strokeColor}` }}
      >
        {starNumber === 1
          ? "very easy"
          : starNumber === 2
            ? "easy"
            : starNumber === 3
              ? "medium"
              : starNumber === 4
                ? "hard"
                : "very hard"}
      </p>

      {/* Progress Bar */}
      <ProgressBar
        percent={percent}
        strokeWidth={strokeWidth}
        strokeColor={strokeColor}
      />
    </div>
  );
};
export default LevelProgress;
