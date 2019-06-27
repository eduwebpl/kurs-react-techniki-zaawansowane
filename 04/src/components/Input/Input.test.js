import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("renders input element", () => {
    const { getByPlaceholderText } = render(<Input />);

    expect(getByPlaceholderText(/name/i)).toBeInTheDocument();
  });
});
