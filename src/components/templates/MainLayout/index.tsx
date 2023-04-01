import { Suspense } from 'react';
import Loading from '~atoms/Loading';
import Header from '~templates/Header';
import { Box } from '@mui/material';

export interface MainLayoutProps {
  children: JSX.Element;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box className="t-mainLayout" sx={{backgroundColor: '#1D1B1B'}}>
      <header>
        <Header />
      </header>
      <main className="t-mainLayout_content_main">
        <Suspense fallback={<Loading size='page' />}>
          {children}
        </Suspense>
      </main>
    </Box>
  );
}
