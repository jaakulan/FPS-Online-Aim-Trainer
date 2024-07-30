import React from 'react';
import { render, screen } from '@testing-library/react';
import Starter from './Starter';

describe("Starter Page renders correctly", () => {
    it("renders without crashing", () => {
        render(<Starter />);
    })

    it("renders the title", () => {
        render(<Starter />);
        expect(screen.getByText("THE BEST ONLINE FPS AIM TRAINER")).toBeInTheDocument();
    })

    it("renders the message", () => {
        render(<Starter />);
        expect(screen.getByText("Welcome to the Aim Trainer, here you will train to shoot different size targets as fast as you can.")).toBeInTheDocument();
    })

    it("renders the image", () => {
        render(<Starter />);
        expect(screen.getByAltText("Starter Image")).toBeInTheDocument();
    })

    it("renders the start button", () => {
        render(<Starter />);
        expect(screen.getByText("Click to Start NOW!")).toBeInTheDocument();
    })
})