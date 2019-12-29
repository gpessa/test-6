import React from "react";
import Button from "./";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("<Button>", () => {
  it("Render correctly Button component", () => {
    const element = renderer.create(<Button>Sumbit</Button>).toJSON();
    expect(element).toMatchSnapshot();
  });

  it("Should have type=button by default", () => {
    const type = mount(<Button>Sumbit</Button>)
      .find("button")
      .getDOMNode()
      .getAttribute("type");

    expect(type).toBe("button");
  });

  it("Should show the type if passed one", () => {
    const type = mount(<Button type="submit">Sumbit</Button>)
      .find("button")
      .getDOMNode()
      .getAttribute("type");

    expect(type).toBe("submit");
  });

  it("Should call onClick callback", done => {
    mount(<Button onClick={() => done()}>Sumbit</Button>).simulate("click");
  });

  it("Should apply variant class", () => {
    const wrapper = shallow(<Button variant="secondary">Sumbit</Button>);
    expect(wrapper.hasClass("button--secondary")).toEqual(true);
  });

  it('Should default to variant="primary"', () => {
    const wrapper = shallow(<Button>Sumbit</Button>);
    expect(wrapper.hasClass("button--primary")).toEqual(true);
  });
});
