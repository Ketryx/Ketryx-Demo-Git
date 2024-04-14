/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("Test warning message @tests:KXITM63AKBT9S4R91SBRXMACZV225Y5", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Patient App");
});
