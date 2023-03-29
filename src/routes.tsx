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
  {path: renderPageUrl('HOME', ':slug'), element: <MainLayoutContainer><HomPage /></MainLayoutContainer>},
  {path: renderPageUrl('VOCABULARIES'), element: <MainLayoutContainer><VocabularyPage /></MainLayoutContainer>},
  {path: renderPageUrl('VOCABULARIES_TRAIN'), element: <MainLayoutContainer><VocabularyTrainPage /></MainLayoutContainer>},
  {path: renderPageUrl('BANK_MANAGER_DETAIL'), element:<MainLayoutContainer><BankManagerDetailPage /></MainLayoutContainer>},
  {path: renderPageUrl('BANK_MANAGER_ADD'), element:<MainLayoutContainer><BankManagerCreatePage /></MainLayoutContainer>},
  {path: renderPageUrl('GROUP_MANAGER'), isPrivate: true, element:<MainLayoutContainer><GroupManagerPage /></MainLayoutContainer>},
  {path: renderPageUrl('GROUP_DETAIL')+'/:slug', element:<MainLayoutContainer><GroupDetailPage /></MainLayoutContainer>},
  {path: renderPageUrl('GROUP_CREATE'), element:<MainLayoutContainer><GroupCreatePage /></MainLayoutContainer>},
  {path: renderPageUrl('SIGN_IN'), element:<AuthLayoutContainer><SignInPage /></AuthLayoutContainer>},
  {path: renderPageUrl('SIGN_UP'), element:<AuthLayoutContainer><SignUpPage /></AuthLayoutContainer>},
];