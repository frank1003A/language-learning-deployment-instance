import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import PasswordCriteria from "./passwordCriteria";

describe("passwordCriteriaComponent", () => {
  it("should show all criteria as invalid when password is empty", () => {
    expect.assertions(4);
    render(<PasswordCriteria password="" />);
    expect(screen.getByText(/8 characters/i)).toBeInTheDocument();
    expect(screen.getByText(/uppercase letter/i)).toBeInTheDocument();
    expect(screen.getByText(/lowercase letter/i)).toBeInTheDocument();
    expect(screen.getByText(/special sharacter/i)).toBeInTheDocument();
  });
});
