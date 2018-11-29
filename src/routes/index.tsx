import * as React from 'react';
import Loadable from 'react-loadable';

const Loading = () => (
  <p>Loading...</p>
);

const Root = Loadable({
  loader: () => import('../containers/Root'),
  loading: Loading
});

const About = Loadable({
  loader: () => import('../containers/About'),
  loading: Loading
});

interface RouteDefinition {
  sequence: number;
  exact: boolean;
  path: string;
  // tslint:disable-next-line:no-any
  component: any;
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
