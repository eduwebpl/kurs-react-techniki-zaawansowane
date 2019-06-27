import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("renders input element", () => {
    const placeholderText = "First Name";
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholderText} />
    );

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
  it("displays default placeholder", () => {
    const defaultPlaceholderText = "Your Value";
    const { getByPlaceholderText } = render(<Input />);

    expect(getByPlaceholderText(defaultPlaceholderText)).toBeInTheDocument();
  });
});
