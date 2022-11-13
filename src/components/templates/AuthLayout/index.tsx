import React, { Suspense } from 'react';
import Loading from '~atoms/Loading';
import HeaderControl from '~templates/HeaderControl';

interface AuthLayoutProps {
  backBtnTitle: string;
  children?: React.ReactNode;
  onHeaderControlClick: () => void;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ backBtnTitle, children, onHeaderControlClick }) => {
  return <div className="t-authLayout">
    <div className="t-authLayout_headerControl">
      <HeaderControl backBtnTitle={backBtnTitle} onClick={onHeaderControlClick} />
    </div>
    <main className="t-authLayout_main">
      <Suspense fallback={<Loading size="full"/>}>
        {children}
      </Suspense>
    </main>
  </div>
};

AuthLayout.defaultProps = {
  children: undefined,
};

export default AuthLayout;

