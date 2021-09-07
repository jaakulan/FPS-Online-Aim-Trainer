import { shallow } from 'enzyme';
import MapPage from './MapPage';

test("renders without crashing", () => {
    shallow(<MapPage />);
});