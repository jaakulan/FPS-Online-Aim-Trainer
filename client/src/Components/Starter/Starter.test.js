import { shallow } from 'enzyme';
import Starter from './Starter';

test("renders without crashing", () => {
    shallow(<Starter />);
});