import { shallow } from 'enzyme';
import Routes from './Routes';

test("renders without crashing", () => {
    shallow(<Routes />);
});