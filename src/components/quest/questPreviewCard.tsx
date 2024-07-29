import Image from "next/image";

interface QuestPreviewCardProperties {
  cardImage: string;
  title: string;
  stage: number;
  points: number;
  level: number;
}

const QuestPreviewCard = ({
  cardImage,
  level,
  points,
  stage,
  title,
}: QuestPreviewCardProperties) => {
  return (
    <>
      <div className="overflow-hidden rounded-md ring-1 ring-gray-200">
        <div className="h-64 w-full overflow-hidden bg-gray-100">
          <Image
            src={cardImage}
            className="h-full w-full"
            height={300}
            width={100}
            alt={title}
          />
        </div>

        <div className="p-3">
          <h4 className="font-inter text-base font-semibold text-neutral-100">
            {title}
          </h4>

          <div className="mt-3 flex flex-row items-center gap-2">
            <div className="text- text-gray-400">Stage {stage}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestPreviewCard;
