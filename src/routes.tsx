import {lazy} from 'react';
const HomPage = lazy(() => import('./pages/Home'));
const TestPage = lazy(() => import('./pages/Home/Test'));

interface RouteType {
  path: string;
  element: JSX.Element;
  isPrivate?: boolean;
}
export const routes = [
  {path: '/', element: <HomPage />},
  {path: 'home', element: <HomPage />},
  {path: 'home/:slug', element: <TestPage />}
];