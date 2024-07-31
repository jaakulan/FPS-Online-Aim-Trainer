import React from "react";
import { render, screen } from "@testing-library/react";
import Transition from "./Transition";

describe("Transition renders correctly", () => {

    it("renders without crashing", () => {
        render(<Transition />);
        expect(screen.queryAllByText((content, element) => {
            return element.textContent.startsWith("Shoot the targets as they appear!");
        }).length).toBeGreaterThan(0);
    })

    it("renders the message", () => {
        render(<Transition />);
        expect(screen.getByText((content, element) => {
            return element.textContent.startsWith("Beginning in ...");
        })).toBeInTheDocument();
    })
})