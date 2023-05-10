import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchInput from "./";

describe("SearchInput", () => {
  const selectedItem = null;
  const searchValue = "";
  const onChangeSearch = jest.fn();
  const onSelectItem = jest.fn();
  const options = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];

  it("renders input and button", () => {
    const onChangeSearch = jest.fn();
    const searchValue = "Post 1";
    const selectedItem = options[0];

    render(
      <SearchInput
        selectedItem={selectedItem}
        searchValue={searchValue}
        onChangeSearch={onChangeSearch}
        options={options}
        onSelectItem={onSelectItem}
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter Post Title");
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", { name: /search/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onChangeSearch when input value changes", () => {
    render(
      <SearchInput
        selectedItem={selectedItem}
        searchValue={searchValue}
        onChangeSearch={onChangeSearch}
        options={options}
        onSelectItem={onSelectItem}
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter Post Title");
    fireEvent.change(inputElement, { target: { value: "testing" } });

    expect(onChangeSearch).toHaveBeenCalledTimes(1);
    expect(onChangeSearch).toHaveBeenCalledWith(expect.any(Object));
  });
});
