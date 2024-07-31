import React from "react";
import { render, screen } from "@testing-library/react";
import CrossHair from "./CrossHair";

describe("CrossHair renders correctly", () => {
    it("renders without crashing", () => {
        render(<CrossHair />);
        expect(screen.getByText("Choose your crosshair!")).toBeInTheDocument();
    })
    it("renders the custom crosshairs", () => {
        render(<CrossHair />);
        expect(screen.getByText("Made by us")).toBeInTheDocument();
    })
    it("renders the CSGO crosshairs", () => {
        render(<CrossHair />);
        expect(screen.getByText("CSGO")).toBeInTheDocument();
    })
    it("renders the Valorant crosshairs", () => {
        render(<CrossHair />);
        expect(screen.getByText("Valorant")).toBeInTheDocument();
    })
    it("renders next hyperlink", () => {
        render(<CrossHair />);
        expect(screen.getByText("Next")).toBeInTheDocument();
    })
})