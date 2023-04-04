import {lazy, ReactElement} from 'react';
import AuthLayoutContainer from '~containers/AuthLayoutContainer';
import MainLayoutContainer from './containers/MainLayoutContainer';
import { renderPageUrl } from './navigation';

const BankManagerCreatePage = lazy(() => import('./pages/BankManagerCreate'));
const BankManagerDetailPage = lazy(() => import('./pages/BankManagerDetail'));
const VocabularyPage = lazy(() => import('./pages/Vocabulary'));
const VocabularyTrainPage = lazy(() => import('./pages/VocabularyTrain'));
const GroupManagerPage = lazy(() => import('./pages/GroupManager'));
const GroupCreatePage = lazy(() => import('./pages/GroupCreate'));
const GroupDetailPage = lazy(()=> import('./pages/GroupDetail'));
const HomPage = lazy(() => import('./pages/Home'));
const SignInPage = lazy(() => import('./pages/SignIn'))
const SignUpPage = lazy(() => import('./pages/SignUp'))

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