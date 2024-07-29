import { render } from "@testing-library/react";

import QuestPreviewCard from "../questPreviewCard";

describe("render quest preview card component", () => {
  it("component is rendered", () => {
    expect.hasAssertions();

    render(
      <QuestPreviewCard
        cardImage="image.png"
        level={1}
        points={2}
        stage={1}
        title="Card title"
      />,
    );
  });
});
