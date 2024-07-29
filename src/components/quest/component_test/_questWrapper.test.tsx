import { render } from "@testing-library/react";

import QuestWraper from "../questWraper";

describe("render quest wrapper component", () => {
  it("has bg-white class", () => {
    expect.hasAssertions();

    const className = "bg-white";
    const component = (
      <QuestWraper>
        <div>Hello world</div>
      </QuestWraper>
    );
    render(component);

    expect(component).toHaveClass(className);
    expect(component).toHaveClass(className);
  });
});
