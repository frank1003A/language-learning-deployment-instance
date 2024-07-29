import { render, screen } from "@testing-library/react";

import LightNav from "~/components/light-navbar/LightNav";

import "@testing-library/jest-dom/extend-expect";

import React from "react";

describe("lightNav", () => {
  it("renders desktop logo", () => {
    expect.assertions(1); // Adding this line to specify the number of assertions in the test
    render(<LightNav />);
    const desktopLogo = screen.getByAltText("desktop-logo");
    expect(desktopLogo).toBeInTheDocument();
  });

  it("renders mobile logo", () => {
    expect.assertions(1); // Adding this line to specify the number of assertions in the test
    render(<LightNav />);
    const mobileLogo = screen.getByAltText("mobile-logo");
    expect(mobileLogo).toBeInTheDocument();
  });

  it("renders Sign In and Sign Up buttons when not signed in", () => {
    expect.assertions(2); // Adding this line to specify the number of assertions in the test
    render(<LightNav />);
    const signInButton = screen.getByText("Sign In");
    const signUpButton = screen.getByText("Sign Up");
    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });

  it("renders profile icon when signed in", () => {
    expect.assertions(1); // Adding this line to specify the number of assertions in the test
    // Override the useEffect to simulate the user being signed in
    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
    jest.spyOn(React, "useState").mockReturnValueOnce([true, jest.fn()]);

    render(<LightNav />);
    const profileIcon = screen.getByAltText("profile-icon");
    expect(profileIcon).toBeInTheDocument();
  });
});
