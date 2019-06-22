import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("app render default route", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  const appDiv = div.querySelector(".app");
  expect(appDiv.innerHTML).toContain("Users");

  ReactDOM.unmountComponentAtNode(div);
});
