import { shallow } from 'enzyme';
import Transition from './Transition';

test("renders without crashing", () => {
    shallow(<Transition />);
});