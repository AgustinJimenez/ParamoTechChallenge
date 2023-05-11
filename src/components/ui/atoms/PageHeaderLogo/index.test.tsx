import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageHeaderLogo from "./";

describe("PageHeaderLogo component", () => {
  it("renders an Image component with the correct props", () => {
    const { getByAltText } = render(<PageHeaderLogo />);
    const image = getByAltText("Picture of the author");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Flogo.png&w=128&q=75"
    );
    expect(image).toHaveAttribute("width", "50");
    expect(image).toHaveAttribute("height", "50");
  });
});
