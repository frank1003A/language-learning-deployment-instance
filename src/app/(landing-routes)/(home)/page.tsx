import QuestPreviewCard from "~/components/quest/questPreviewCard";
import QuestWraper from "~/components/quest/questWraper";

function page() {
  return (
    <div className="font-lilita">
      Welcome to our Language Learning platform.
      <QuestWraper>
        <div className="grid grid-cols-4 gap-4">
          <QuestPreviewCard
            cardImage="/image.png"
            level={1}
            path="/"
            points={3}
            stage={4}
            title="Card title"
          />
          <QuestPreviewCard
            cardImage="/image.png"
            level={1}
            path="/"
            points={3}
            stage={4}
            title="Card title"
          />
          <QuestPreviewCard
            cardImage="/image.png"
            level={1}
            path="/"
            points={3}
            stage={4}
            title="Card title"
          />
          <QuestPreviewCard
            cardImage="/image.png"
            level={1}
            path="/"
            points={3}
            stage={4}
            title="Card title"
          />
        </div>
      </QuestWraper>
    </div>
  );
}
export default page;
