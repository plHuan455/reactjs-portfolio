import {lazy, ReactElement} from 'react';
import MainLayoutContainer from './containers/MainLayoutContainer';
import { renderPageUrl } from './navigation';
const HomPage = lazy(() => import('./pages/Home'));

interface RouteType {
  path: string;
  element: JSX.Element;
  layout?: ReactElement;
  isPrivate?: boolean;
}
export const routes: RouteType[] = [
  {path: '', element: <MainLayoutContainer><HomPage /></MainLayoutContainer>},
  {path: renderPageUrl("HOME"), element: <MainLayoutContainer><HomPage /></MainLayoutContainer> },
];