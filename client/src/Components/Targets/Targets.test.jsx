import React from "react";
import { render, screen } from "@testing-library/react";
import Targets from "./Targets";

describe("Targets renders correctly", () => {
    it("renders without crashing", () => {
        render(<Targets />);
        expect(screen.getByText("Choose your targets!")).toBeInTheDocument();
    })

    it("renders the targets", () => {
        render(<Targets />);
        expect(screen.getByText("All the targets!")).toBeInTheDocument();
    })

    it("renders CSGO targets", () => {
        render(<Targets />);
        expect(screen.getByText("CSGO")).toBeInTheDocument();
    })

    it("renders Valorant targets", () => {
        render(<Targets />);
        expect(screen.getByText("Valorant")).toBeInTheDocument();
    }) 

    it("renders Warzone targets", () => {
        render(<Targets />);
        expect(screen.getByText("Warzone")).toBeInTheDocument();
    })

    it("renders Apex Legends targets", () => {
        render(<Targets />);
        expect(screen.getByText("Apex Legends")).toBeInTheDocument();
    })

    it("renders next hyperlink", () => {
        render(<Targets />);
        expect(screen.getByText("Next")).toBeInTheDocument();
    })
})