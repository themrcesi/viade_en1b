import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, queryByTestId, waitForElement } from "@testing-library/react";
import { MyRoutes } from "../MyRoutes";
import "@testing-library/jest-dom";
let myRoutes = null;
let rerenderFunc = () => {};
beforeEach(() => {
  const { container, rerender } = render(
    <BrowserRouter>
      <MyRoutes></MyRoutes>
    </BrowserRouter>
  );
  myRoutes = container;
  rerenderFunc = rerender;
});

describe("Everything is rendered correctly", () => {
  test("routes are rendered", () => {
    waitForElement(() => {
      expect(queryByTestId(myRoutes, "myRoutes-route-list")).not.toBeNull();
      expect(queryByTestId(myRoutes, "myRoutes-route-details")).not.toBeNull();
    });
  });
});
