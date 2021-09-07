import { shallow } from 'enzyme';
import CrossHair from './CrossHair';

test("renders without crashing", () => {
    shallow(<CrossHair />);
});