import { shallow } from 'enzyme';
import Targets from './Targets';

test("renders without crashing", () => {
    shallow(<Targets />);
});