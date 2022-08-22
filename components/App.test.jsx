import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./App.jsx";

jest.mock("../utils/chart.js");

describe("App", () => {
  it("renders app", async () => {
    render(<App />);
    const heading = await screen.findByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("your code begins here");
  });
});
