import {lazy} from 'react';
const HomPage = lazy(() => import('./pages/Home'));
const TestPage = lazy(() => import('./pages/TestPage'));

interface RouteType {
  path: string;
  element: JSX.Element;
  isPrivate?: boolean;
}
export const routes = [
  {path: '/', element: <HomPage />},
  {path: 'trang-chu', element: <HomPage />},
  {path: 'trang-chu/:slug', element: <TestPage />},
  {path: 'test', element: <TestPage />}
];