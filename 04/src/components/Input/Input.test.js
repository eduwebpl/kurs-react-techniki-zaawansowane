import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("renders input element", () => {
    const { getByLabelText } = render(<Input name="Name" label="Name" />);

    expect(getByLabelText("Name")).toBeInTheDocument();
  });
  it("displays placeholder", () => {
    let placeholderText = "Your Value";
    const { getByPlaceholderText, rerender } = render(<Input />);

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();

    placeholderText = "Name";
    rerender(<Input placeholder={placeholderText} />);

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
  it("displays proper value", () => {
    const { getByLabelText } = render(<Input name="Name" label="Name" />);
    const input = getByLabelText(/name/i);

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "roman" } });

    expect(input).toHaveValue("roman");
  });
  it("prevents user from passing numbers", () => {
    const { getByLabelText } = render(<Input name="name" label="name" />);

    const input = getByLabelText(/name/i);

    fireEvent.change(input, { target: { value: "roman1234" } });
    expect(input).toHaveValue("roman");

    fireEvent.change(input, { target: { value: "roman1234roman" } });
    expect(input).toHaveValue("romanroman");

    fireEvent.change(input, { target: { value: "roman1234roman!" } });
    expect(input).toHaveValue("romanroman!");
  });
});
