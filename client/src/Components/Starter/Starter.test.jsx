import { render, screen } from '@testing-library/react';
import Starter from './Starter';

describe("Starter Page renders correctly", () => {
    it("renders without crashing", () => {
        render(<Starter />);
    })
})