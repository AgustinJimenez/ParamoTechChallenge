import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HtmlRenderer from "./";

describe("HtmlRenderer component", () => {
  it("renders the HTML string as inner HTML", () => {
    const htmlString = "<h1>Hello, world!</h1>";
    const { getByText } = render(<HtmlRenderer htmlString={htmlString} />);
    const heading = getByText("Hello, world!");
    expect(heading).toBeInTheDocument();
  });
});
