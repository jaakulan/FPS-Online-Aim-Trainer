import { shallow } from 'enzyme';
import Training from './Training';

test("renders without crashing", () => {
    shallow(<Training />);
});