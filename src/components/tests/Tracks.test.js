import React from "react";
// import { render, wait, fireEvent } from "react-testing-library";
// import renderer from "react-test-renderer";
import { Provider } from "../../context";
import Tracks from "../tracks/Tracks";
import despacito from "./testTracks";
import { shallow } from "enzyme";

test("view tracks", () => {
  const component = shallow(<Tracks />);
  expect(component).toMatchSnapshot();
});
