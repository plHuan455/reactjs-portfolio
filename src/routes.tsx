import {lazy} from 'react';
import { renderPageUrl } from './navigations';
const HomPage = lazy(() => import('./pages/Home'));
const TestPage = lazy(() => import('./pages/TestPage'));

interface RouteType {
  path: string;
  element: JSX.Element;
  isPrivate?: boolean;
}
export const routes = [
  {path: '/', element: <HomPage />},
  {path: renderPageUrl("HOME"), element: <HomPage />},
  {path: renderPageUrl('HOME', ':slug'), element: <TestPage />},
  {path: renderPageUrl('VOCABULARIES'), element: <TestPage />}
];