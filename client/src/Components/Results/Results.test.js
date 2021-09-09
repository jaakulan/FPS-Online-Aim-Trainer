import { shallow } from 'enzyme';
import Results from './Results';

test("renders without crashing", () => {
    shallow(<Results />);
});