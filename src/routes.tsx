import {lazy} from 'react';
import MainLayoutContainer from './container/MainLayoutContainer';
import { renderPageUrl } from './navigation';
import Test from './pages/test';
import Vocabulary from './pages/Vocabulary';

const BankManagerCreatePage = lazy(() => import('./pages/BankManagerCreate'));
const BankManagerDetailPage = lazy(() => import('./pages/BankManagerDetail'));
const HomPage = lazy(() => import('./pages/Home'));

interface RouteType {
  path: string;
  element: JSX.Element;
  isPrivate?: boolean;
}
export const routes: RouteType[] = [
  {path: '', element: <MainLayoutContainer><HomPage /></MainLayoutContainer>},
  {path: renderPageUrl("HOME"), element: <MainLayoutContainer><HomPage /></MainLayoutContainer> },
  {path: renderPageUrl('HOME', ':slug'), element: <MainLayoutContainer><HomPage /></MainLayoutContainer>},
  {path: renderPageUrl('VOCABULARIES'), element: <MainLayoutContainer><Vocabulary /></MainLayoutContainer>},
  {path: renderPageUrl('BANK_MANAGER_DETAIL'), element:<MainLayoutContainer><BankManagerDetailPage /></MainLayoutContainer>},
  {path: renderPageUrl('BANK_MANAGER_ADD'), element:<MainLayoutContainer><BankManagerCreatePage /></MainLayoutContainer>},
  {path: renderPageUrl('TEST'), element:<MainLayoutContainer><Test /></MainLayoutContainer>},
];