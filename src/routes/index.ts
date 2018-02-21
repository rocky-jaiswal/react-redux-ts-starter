import Root from '../containers/Root';
import About from '../containers/About';

interface RouteDefinition {
  sequence: number;
  exact: boolean;
  path: string;
  component: React.ComponentClass<{}>;
}

interface Routes {
  [propName: string]: RouteDefinition;
}

const routes: Routes = {
  root: {
    sequence: 1,
    component: Root,
    exact: true,
    path: '/'
  },
  about: {
    sequence: 2,
    component: About,
    exact: true,
    path: '/about'
  }
};

export default routes;
