import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   // shallow(<App />);
//   render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

test("renders without crashing", () => {
  shallow(<App />);
});
