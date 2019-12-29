import React from "react";
import Bar from "./";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

describe("<Bar>", () => {
  it("Render correctly Bar component", () => {
    const element = renderer
      .create(
        <Bar>
          <h1>Cane</h1>
          <h2>Gatto</h2>
        </Bar>
      )
      .toJSON();

    expect(element).toMatchSnapshot();
  });

  test("Children are render inside the component", () => {
    const component = mount(
      <Bar>
        <h1>Cane</h1>
        <h2>Gatto</h2>
      </Bar>
    );

    expect(component.find("h1").length).toBe(1);
    expect(component.find("h2").length).toBe(1);
  });
});
