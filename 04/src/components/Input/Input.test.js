import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

const renderInput = props => {
  const utils = render(<Input name="name" label="name" {...props} />);
  const input = utils.getByLabelText(/name/i);

  return { ...utils, input };
};

describe("Input component", () => {
  it("renders input element", () => {
    const { input } = renderInput();
    expect(input).toBeInTheDocument();
  });
  it("displays placeholder", () => {
    const { getByPlaceholderText, rerender } = renderInput();

    let placeholderText = "Your Value";
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();

    placeholderText = "Name";
    rerender(<Input name="Name" label="Name" placeholder={placeholderText} />);
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
  it("displays proper value", () => {
    const { input } = renderInput();

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "roman" } });
    expect(input).toHaveValue("roman");
  });
  it("displays error when digits are passed", async () => {
    const { input, container } = renderInput();

    expect(container).not.toHaveTextContent(/error/i);

    fireEvent.change(input, { target: { value: "roman123" } });
    expect(container).toHaveTextContent(/error/i);

    fireEvent.change(input, { target: { value: "roman" } });
    expect(container).not.toHaveTextContent(/error/i);
  });
});
