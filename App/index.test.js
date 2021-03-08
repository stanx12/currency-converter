import React from "react";
import renderer from "react-test-renderer";

import App from "./index";


describe("<App />", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })

  it("should render 1 child", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree.children.length).toBe(1);
  });

  it("should renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
