import React from "react";
import { render, screen } from "@testing-library/react";
import Results from "./Results";

describe("Results renders correctly", () => {
    it("renders without crashing", () => {
        render(<Results />);
        expect(screen.getByText("Results")).toBeInTheDocument();
    })
})