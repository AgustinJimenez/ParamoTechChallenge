import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Panel from "./";

describe("Panel component", () => {
  it("renders children", () => {
    const children = <div data-testid="test-children">Test children</div>;
    render(<Panel>{children}</Panel>);
    expect(screen.getByTestId("test-children")).toBeInTheDocument();
  });

  it("renders a Paper component with the correct props", () => {
    const children = <div>Test children</div>;
    render(<Panel>{children}</Panel>);
    const paper = screen.findByTestId("gid-container");
    waitFor(() => {
      expect(paper).toHaveStyleRule("padding", "24px");
      expect(paper).toHaveStyleRule("margin-top", "16px");
      expect(paper).toHaveStyleRule("margin-bottom", "16px");
      expect(paper).toHaveStyleRule("height", "fit-content");
      expect(paper).toHaveStyleRule(
        "box-shadow",
        "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      );
    });
  });

  it("renders a Grid component with the correct props", () => {
    const children = <div>Test children</div>;
    render(<Panel>{children}</Panel>);
    // const grid = screen.getByRole("grid");
    const grid = screen.findByTestId("grid-container");

    waitFor(() => {
      expect(grid).toBeInTheDocument();
      expect(grid).toHaveClass("MuiGrid-container");
      expect(grid).toHaveClass("MuiGrid-item");
    });
  });
});
