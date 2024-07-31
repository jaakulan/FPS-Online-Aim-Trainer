import React from "react";
import { render, screen } from '@testing-library/react';
import MapPage from "./MapPage";

describe("MapPage renders correctly", () => {
    it("renders without crashing", () => {
        render(<MapPage />);
        expect(screen.getByText("Choose a map to practice on!")).toBeInTheDocument();
    })
    it("renders the Cold War Text", () => {
        render(<MapPage />);
        expect(screen.getByText("Cold War")).toBeInTheDocument();
    })
    it("renders the Warzone Text", () => {
        render(<MapPage />);
        expect(screen.getByText("Warzone")).toBeInTheDocument();
    })
    it("renders the Overwatch Text", () => {
        render(<MapPage />);
        expect(screen.getByText("Overwatch")).toBeInTheDocument();
    })
    it("renders the CSGO Text", () => {
        render(<MapPage />);
        expect(screen.getByText("CSGO")).toBeInTheDocument();
    })
    it("renders the Valorant Text", () => {
        render(<MapPage />);
        expect(screen.getByText("Valorant")).toBeInTheDocument();
    })
    it("renders next hyperlink", () => {
        render(<MapPage />);
        expect(screen.getByText("Next")).toBeInTheDocument();
    })

})