import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageHeaderLinks from "./";

describe("PageHeaderLinks component", () => {
  it("renders a list of links with the correct props", () => {
    const { getAllByRole } = render(<PageHeaderLinks />);
    const links = getAllByRole("link");
    expect(links).toHaveLength(4);

    const sections = [
      { title: "Home", url: "/" },
      { title: "About", url: "/about" },
      { title: "Blog", url: "/posts" },
      { title: "Contacts", url: "/contacts" },
    ];

    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", sections[index].url);
      expect(link).toHaveTextContent(sections[index].title);
      expect(link).toHaveStyle("text-decoration: unset");
      expect(link).toHaveStyle("font-size: 22px");
      expect(link).toHaveStyle("font-weight: 600");
    });
  });
});
