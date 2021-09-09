import { shallow } from 'enzyme';
import Settings from './Settings';

test("renders without crashing", () => {
    shallow(<Settings />);
});