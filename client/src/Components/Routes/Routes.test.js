import { shallow, mount } from 'enzyme';
import { Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import Routes from './Routes';
import Starter from "../Starter/Starter";
import MapPage  from "../MapPage/MapPage";
import CrossHair from "../CrossHair/CrossHair";
import Settings from "../Settings/Settings";
import Transition from "../Transition/Transition";
import Results from "../Results/Results";
import Training from "../Training/Training";
import Targets from "../Targets/Targets";

test("renders without crashing", () => {
    shallow(<Routes />);
});

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Routes/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
  })
  test('should show Starter component for / router (getting array of routes)', () => {
    expect(pathMap['/']).toBe(Starter);
  })
  test('should show Starter component for /starter router', () => {
    expect(pathMap['/starter']).toBe(Starter);
  })
  test('should show MapPage component for /map router', () => {
    expect(pathMap['/map']).toBe(MapPage);
  })
  test('should show CrossHairs component for /crosshair router', () => {
    expect(pathMap['/crosshair']).toBe(CrossHair);
  })
  test('should show Targets component for /targets router', () => {
    expect(pathMap['/targets']).toBe(Targets);
  })
  test('should show Settings component for /Settings router', () => {
    expect(pathMap['/settings']).toBe(Settings);
  })
  test('should show Results component for /results router', () => {
    expect(pathMap['/results']).toBe(Results);
  })
  test('should show Training component for /training router', () => {
    expect(pathMap['/training']).toBe(Training);
  })
  test('should show Transition component for /transition router', () => {
    expect(pathMap['/transition']).toBe(Transition);
  })
})